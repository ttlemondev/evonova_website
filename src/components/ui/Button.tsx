import React from 'react';
import { cn } from '@/lib/utils';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary';
  size?: 'default' | 'large';
  loading?: boolean;
  children: React.ReactNode;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant = 'primary',
      size = 'default',
      loading = false,
      disabled,
      className,
      children,
      ...props
    },
    ref
  ) => {
    const isDisabled = disabled || loading;

    return (
      <button
        ref={ref}
        disabled={isDisabled}
        className={cn(
          // Base styles - pill shape and typography
          'rounded-[50px] font-[480] text-[20px] leading-[1.4] tracking-[-0.10px]',
          'transition-all duration-200 ease-out',
          'inline-flex items-center justify-center gap-2',
          'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2',

          // Variant styles
          variant === 'primary' && [
            'bg-black text-white',
            'hover:scale-[1.02] active:scale-[0.98]',
            'focus-visible:ring-black',
          ],
          variant === 'secondary' && [
            'bg-white text-black border border-[#e6e6e6]',
            'hover:border-black hover:shadow-sm',
            'active:scale-[0.98]',
            'focus-visible:ring-black',
          ],

          // Size styles
          size === 'default' && [
            variant === 'primary' && 'px-5 py-[10px]',
            variant === 'secondary' && 'px-[18px] py-2 pb-[10px]',
          ],
          size === 'large' && [
            variant === 'primary' && 'px-8 py-3',
            variant === 'secondary' && 'px-7 py-[10px] pb-3',
          ],

          // Disabled state
          isDisabled && [
            'opacity-40 cursor-not-allowed',
            'hover:scale-100 active:scale-100',
            variant === 'secondary' && 'hover:border-[#e6e6e6] hover:shadow-none',
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
      </button>
    );
  }
);

Button.displayName = 'Button';

export default Button;
