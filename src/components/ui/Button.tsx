import React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cn } from '@/lib/utils';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary';
  loading?: boolean;
  asChild?: boolean;
  children: React.ReactNode;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant = 'primary',
      loading = false,
      disabled,
      asChild = false,
      className,
      children,
      ...props
    },
    ref
  ) => {
    const Comp = asChild ? Slot : 'button';
    const isDisabled = disabled || loading;

    return (
      <Comp
        ref={ref}
        disabled={isDisabled}
        className={cn(
          // Base styles - pill shape and typography from DESIGN.md
          'rounded-[50px] text-button',
          'transition-all duration-200 ease-out',
          'inline-flex items-center justify-center gap-2',
          'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2',

          // Variant styles from DESIGN.md
          variant === 'primary' && [
            'bg-primary text-on-primary',
            'px-5 py-[10px]',
            'hover:scale-[1.02] active:scale-[0.98]',
            'focus-visible:ring-primary',
          ],
          variant === 'secondary' && [
            'bg-canvas text-ink',
            'px-[18px] py-2 pb-[10px]',
            'hover:shadow-sm active:scale-[0.98]',
            'focus-visible:ring-primary',
          ],

          // Disabled state
          isDisabled && [
            'opacity-50 cursor-not-allowed',
            'hover:scale-100 active:scale-100 hover:shadow-none',
          ],

          className
        )}
        {...props}
      >
        {loading && (
          <svg
            className="animate-spin h-5 w-5"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            />
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            />
          </svg>
        )}
        {children}
      </Comp>
    );
  }
);

Button.displayName = 'Button';

export default Button;
