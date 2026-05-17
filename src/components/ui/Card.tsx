import React from 'react';
import { cn } from '@/lib/utils';

export type ColorBlockVariant = 'lime' | 'lilac' | 'cream' | 'mint' | 'pink' | 'coral' | 'navy' | 'default';

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: ColorBlockVariant;
  children: React.ReactNode;
}

const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ variant = 'default', className, children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          // Base styles from DESIGN.md - rounded-lg (24px) and padding-lg (24px)
          'rounded-[var(--radius-lg)] p-[var(--spacing-lg)]',
          'transition-shadow duration-200 ease-out',

          // Default variant - white background with hairline border
          variant === 'default' && [
            'bg-[var(--color-canvas)] border border-[var(--color-hairline)]',
            'hover:shadow-[0_4px_16px_rgba(0,0,0,0.06)]',
          ],

          // Color block variants using design tokens
          variant === 'lime' && 'bg-[var(--color-block-lime)] text-[var(--color-ink)]',
          variant === 'lilac' && 'bg-[var(--color-block-lilac)] text-[var(--color-ink)]',
          variant === 'cream' && 'bg-[var(--color-block-cream)] text-[var(--color-ink)]',
          variant === 'mint' && 'bg-[var(--color-block-mint)] text-[var(--color-ink)]',
          variant === 'pink' && 'bg-[var(--color-block-pink)] text-[var(--color-ink)]',
          variant === 'coral' && 'bg-[var(--color-block-coral)] text-[var(--color-ink)]',
          variant === 'navy' && 'bg-[var(--color-block-navy)] text-[var(--color-inverse-ink)]',

          className
        )}
        {...props}
      >
        {children}
      </div>
    );
  }
);

Card.displayName = 'Card';

export default Card;