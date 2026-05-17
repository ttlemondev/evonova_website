import React from 'react';
import { cn } from '@/lib/utils';

export type ColorBlockVariant = 'lime' | 'lilac' | 'cream' | 'mint' | 'pink' | 'coral' | 'navy';

export interface ColorBlockProps extends React.HTMLAttributes<HTMLDivElement> {
  variant: ColorBlockVariant;
  children: React.ReactNode;
}

const ColorBlock = React.forwardRef<HTMLDivElement, ColorBlockProps>(
  ({ variant, className, children, ...props }, ref) => {
    return (
      <section
        ref={ref}
        className={cn(
          // Base styles from DESIGN.md - rounded-lg (24px) and padding-xxl (48px)
          'w-full rounded-[var(--radius-lg)] p-[var(--spacing-xxl)]',

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
      </section>
    );
  }
);

ColorBlock.displayName = 'ColorBlock';

export default ColorBlock;