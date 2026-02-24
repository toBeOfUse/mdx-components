import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';

import { cn } from '@/utils';

const alertVariants = cva(
  'mdxui:relative mdxui:w-full mdxui:rounded-lg mdxui:border mdxui:px-4 mdxui:py-3 mdxui:text-sm mdxui:grid mdxui:has-[>svg]:grid-cols-[calc(var(--mdxui-spacing)*4)_1fr] mdxui:grid-cols-[0_1fr] mdxui:has-[>svg]:gap-x-3 mdxui:gap-y-0.5 mdxui:items-start mdxui:[&>svg]:size-4 mdxui:[&>svg]:translate-y-0.5 mdxui:[&>svg]:text-current',
  {
    variants: {
      variant: {
        default: 'mdxui:bg-card mdxui:text-card-foreground',
        info: 'mdxui:border-blue-200 mdxui:bg-blue-50 mdxui:text-blue-900 mdxui:dark:border-blue-800 mdxui:dark:bg-blue-950 mdxui:dark:text-blue-100 mdxui:[&>svg]:text-blue-600 mdxui:dark:[&>svg]:text-blue-400',
        destructive:
          'mdxui:text-destructive mdxui:bg-card mdxui:[&>svg]:text-current mdxui:*:data-[slot=alert-description]:text-destructive/90',
        warning:
          'mdxui:border-yellow-300 mdxui:bg-yellow-50 mdxui:text-yellow-900 mdxui:dark:border-yellow-700 mdxui:dark:bg-yellow-950 mdxui:dark:text-yellow-100 mdxui:[&>svg]:text-yellow-600 mdxui:dark:[&>svg]:text-yellow-400',
      },
    },
    defaultVariants: {
      variant: 'info',
    },
  },
);

function Alert({
  className,
  variant,
  ...props
}: React.ComponentProps<'div'> & VariantProps<typeof alertVariants>) {
  return (
    <div
      data-slot="alert"
      role="alert"
      className={cn(alertVariants({ variant }), className)}
      {...props}
    />
  );
}

function AlertTitle({ className, ...props }: React.ComponentProps<'div'>) {
  return (
    <div
      data-slot="alert-title"
      className={cn(
        'mdxui:col-start-2 mdxui:line-clamp-1 mdxui:min-h-4 mdxui:font-medium mdxui:tracking-tight',
        className,
      )}
      {...props}
    />
  );
}

function AlertDescription({ className, ...props }: React.ComponentProps<'div'>) {
  return (
    <div
      data-slot="alert-description"
      className={cn(
        'mdxui:text-muted-foreground mdxui:col-start-2 mdxui:grid mdxui:justify-items-start mdxui:gap-1 mdxui:text-sm mdxui:[&_p]:leading-relaxed',
        className,
      )}
      {...props}
    />
  );
}

export { Alert, AlertTitle, AlertDescription };
