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
          // Base styles - rounded-lg (24px) and padding (24px)
          'rounded-[24px] p-6',
          'transition-shadow duration-200 ease-out',

          // Default variant - white background with hairline border
          variant === 'default' && [
            'bg-white border border-[#e6e6e6]',
            'hover:shadow-[0_4px_16px_rgba(0,0,0,0.06)]',
          ],

          // Color block variants
          variant === 'lime' && 'bg-[#dceeb1] text-black',
          variant === 'lilac' && 'bg-[#c5b0f4] text-black',
          variant === 'cream' && 'bg-[#f4ecd6] text-black',
          variant === 'mint' && 'bg-[#c8e6cd] text-black',
          variant === 'pink' && 'bg-[#efd4d4] text-black',
          variant === 'coral' && 'bg-[#f3c9b6] text-black',
          variant === 'navy' && 'bg-[#1f1d3d] text-white',

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