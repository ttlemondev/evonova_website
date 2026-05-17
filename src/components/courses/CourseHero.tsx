'use client';

import React from 'react';
import Link from 'next/link';
import Button from '@/components/ui/Button';
import { cn } from '@/lib/utils';

export interface CourseHeroProps {
  tag: string;
  tagColor: string;
  title: string;
  subtitle: string;
  duration: string;
  target: string;
  ctaText: string;
  ctaHref: string;
}

export default function CourseHero({
  tag,
  tagColor,
  title,
  subtitle,
  duration,
  target,
  ctaText,
  ctaHref,
}: CourseHeroProps) {
  return (
    <section className="w-full py-section">
      <div className="mx-auto max-w-[1280px] px-lg md:px-xl">
        {/* Course tag with colored background */}
        <div
          className={cn(
            'inline-block rounded-md px-4 py-2 mb-lg',
            'text-eyebrow uppercase'
          )}
          style={{ backgroundColor: tagColor }}
        >
          {tag}
        </div>

        {/* Course title */}
        <h1 className="text-display-lg">{title}</h1>

        {/* Course subtitle */}
        <p className="text-headline mt-md">{subtitle}</p>

        {/* Duration and target audience */}
        <div className="mt-lg space-y-xs">
          <p className="text-body">
            <span className="font-medium">课程时长：</span>
            {duration}
          </p>
          <p className="text-body">
            <span className="font-medium">适合人群：</span>
            {target}
          </p>
        </div>

        {/* CTA button */}
        <div className="mt-xxl">
          <Link href={ctaHref}>
            <Button variant="primary">{ctaText}</Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
