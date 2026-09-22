'use client';

import { useEffect } from 'react';

/** Progressive enhancement: server-rendered content is always visible. */
export default function PageMotion() {
  useEffect(() => {
    const root = document.getElementById('top');
    const preference = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (!root || !('IntersectionObserver' in window) || !Element.prototype.animate) return;

    const animations = new Map<Element, Animation>();
    const observer = new IntersectionObserver((entries) => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue;
        observer.unobserve(entry.target);
        if (preference.matches || entry.target.contains(document.activeElement)) continue;

        const animation = entry.target.animate([
          { opacity: 0, transform: 'translateY(20px)' },
          { opacity: 1, transform: 'translateY(0)' },
        ], {
          duration: 700,
          delay: entry.target.getAttribute('data-reveal') === 'later' ? 90 : 0,
          easing: 'cubic-bezier(0.22, 1, 0.36, 1)',
          fill: 'backwards',
        });
        animations.set(entry.target, animation);
        animation.onfinish = () => animations.delete(entry.target);
      }
    }, { threshold: 0.08 });

    // Skip above-the-fold content: hydration should never hide what is already visible.
    if (!preference.matches) {
      root.querySelectorAll('[data-reveal]').forEach((element) => {
        if (element.getBoundingClientRect().top >= window.innerHeight) observer.observe(element);
      });
    }

    const cancelMotion = () => {
      if (!preference.matches) return;
      observer.disconnect();
      animations.forEach((animation) => animation.cancel());
      animations.clear();
    };
    const revealFocusedContent = (event: FocusEvent) => {
      if (!(event.target instanceof Node)) return;
      for (const [element, animation] of animations) {
        if (element.contains(event.target)) {
          animation.cancel();
          animations.delete(element);
        }
      }
    };
    preference.addEventListener('change', cancelMotion);
    root.addEventListener('focusin', revealFocusedContent);
    return () => {
      observer.disconnect();
      animations.forEach((animation) => animation.cancel());
      preference.removeEventListener('change', cancelMotion);
      root.removeEventListener('focusin', revealFocusedContent);
    };
  }, []);

  return null;
}
