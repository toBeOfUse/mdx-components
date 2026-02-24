import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { Slot } from 'radix-ui';

import { cn } from '@/utils';

const buttonVariants = cva(
  "mdxui:inline-flex mdxui:items-center mdxui:justify-center mdxui:gap-2 mdxui:whitespace-nowrap mdxui:rounded-md mdxui:text-sm mdxui:font-medium mdxui:transition-all mdxui:disabled:pointer-events-none mdxui:disabled:opacity-50 mdxui:[&_svg]:pointer-events-none mdxui:[&_svg:not([class*='size-'])]:size-4 mdxui:shrink-0 mdxui:[&_svg]:shrink-0 mdxui:outline-none mdxui:focus-visible:border-ring mdxui:focus-visible:ring-ring/50 mdxui:focus-visible:ring-[3px] mdxui:aria-invalid:ring-destructive/20 mdxui:dark:aria-invalid:ring-destructive/40 mdxui:aria-invalid:border-destructive",
  {
    variants: {
      variant: {
        default: 'mdxui:bg-primary mdxui:text-primary-foreground mdxui:hover:bg-primary/90',
        destructive:
          'mdxui:bg-destructive mdxui:text-white mdxui:hover:bg-destructive/90 mdxui:focus-visible:ring-destructive/20 mdxui:dark:focus-visible:ring-destructive/40 mdxui:dark:bg-destructive/60',
        outline:
          'mdxui:border mdxui:bg-background mdxui:shadow-xs mdxui:hover:bg-accent mdxui:hover:text-accent-foreground mdxui:dark:bg-input/30 mdxui:dark:border-input mdxui:dark:hover:bg-input/50',
        secondary: 'mdxui:bg-secondary mdxui:text-secondary-foreground mdxui:hover:bg-secondary/80',
        ghost:
          'mdxui:hover:bg-accent mdxui:hover:text-accent-foreground mdxui:dark:hover:bg-accent/50',
        link: 'mdxui:text-primary mdxui:underline-offset-4 mdxui:hover:underline',
      },
      size: {
        default: 'mdxui:h-9 mdxui:px-4 mdxui:py-2 mdxui:has-[>svg]:px-3',
        xs: "mdxui:h-6 mdxui:gap-1 mdxui:rounded-md mdxui:px-2 mdxui:text-xs mdxui:has-[>svg]:px-1.5 mdxui:[&_svg:not([class*='size-'])]:size-3",
        sm: 'mdxui:h-8 mdxui:rounded-md mdxui:gap-1.5 mdxui:px-3 mdxui:has-[>svg]:px-2.5',
        lg: 'mdxui:h-10 mdxui:rounded-md mdxui:px-6 mdxui:has-[>svg]:px-4',
        icon: 'mdxui:size-9',
        'icon-xs': "mdxui:size-6 mdxui:rounded-md mdxui:[&_svg:not([class*='size-'])]:size-3",
        'icon-sm': 'mdxui:size-8',
        'icon-lg': 'mdxui:size-10',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  },
);

function Button({
  className,
  variant = 'default',
  size = 'default',
  asChild = false,
  ...props
}: React.ComponentProps<'button'> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
  }) {
  const Comp = asChild ? Slot.Root : 'button';

  return (
    <Comp
      data-slot="button"
      data-variant={variant}
      data-size={size}
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  );
}

export { Button, buttonVariants };
