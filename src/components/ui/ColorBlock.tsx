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
          // Base styles - rounded-lg (24px) and padding (48px)
          'w-full rounded-[24px] p-12',

          // Color block variants from design system
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
      </section>
    );
  }
);

ColorBlock.displayName = 'ColorBlock';

export default ColorBlock;