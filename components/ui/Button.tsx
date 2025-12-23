import { ButtonHTMLAttributes, AnchorHTMLAttributes, forwardRef } from 'react';
import Link from 'next/link';
import { cva, type VariantProps } from 'class-variance-authority';

const buttonVariants = cva(
  'inline-flex items-center justify-center rounded-lg font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50',
  {
    variants: {
      variant: {
        primary:
          'bg-slate-900 text-white hover:bg-slate-800 shadow-sm hover:shadow-md focus-visible:ring-slate-600',
        secondary:
          'bg-slate-100 text-slate-900 hover:bg-slate-200 border border-slate-200 focus-visible:ring-slate-600',
        outline:
          'border-2 border-slate-300 text-slate-800 hover:bg-slate-100 focus-visible:ring-slate-600',
        ghost:
          'text-slate-700 hover:bg-slate-100 hover:text-slate-900 focus-visible:ring-slate-600',
        link: 'text-blue-700 underline-offset-4 hover:underline hover:text-blue-900 focus-visible:ring-blue-600',
      },
      size: {
        sm: 'h-9 px-3 text-sm',
        md: 'h-11 px-5 text-sm',
        lg: 'h-12 px-6 text-base',
        xl: 'h-14 px-8 text-base',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'md',
    },
  }
);

// Simple cn function to avoid extra dependency
function cn(...classes: (string | undefined | null | false)[]) {
  return classes.filter(Boolean).join(' ');
}

export interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, ...props }, ref) => {
    return (
      <button
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = 'Button';

interface LinkButtonProps
  extends Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'href'>,
    VariantProps<typeof buttonVariants> {
  href: string;
  external?: boolean;
}

const LinkButton = forwardRef<HTMLAnchorElement, LinkButtonProps>(
  ({ className, variant, size, href, external, children, ...props }, ref) => {
    if (external) {
      return (
        <a
          href={href}
          className={cn(buttonVariants({ variant, size, className }))}
          ref={ref}
          target="_blank"
          rel="noopener noreferrer"
          {...props}
        >
          {children}
        </a>
      );
    }

    return (
      <Link
        href={href}
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref as React.Ref<HTMLAnchorElement>}
        {...props}
      >
        {children}
      </Link>
    );
  }
);
LinkButton.displayName = 'LinkButton';

export { Button, LinkButton, buttonVariants };
