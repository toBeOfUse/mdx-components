import * as React from 'react';

import { cn } from '@/utils';

function Card({ className, ...props }: React.ComponentProps<'div'>) {
  return (
    <div
      data-slot="card"
      className={cn(
        'mdxui:bg-card mdxui:text-card-foreground mdxui:flex mdxui:flex-col mdxui:gap-4 mdxui:rounded-xl mdxui:border mdxui:py-4 mdxui:shadow-sm',
        className,
      )}
      {...props}
    />
  );
}

function CardHeader({ className, ...props }: React.ComponentProps<'div'>) {
  return (
    <div
      data-slot="card-header"
      className={cn(
        'mdxui:@container/card-header mdxui:grid mdxui:auto-rows-min mdxui:grid-rows-[auto_auto] mdxui:items-start mdxui:gap-2 mdxui:px-4 mdxui:has-data-[slot=card-action]:grid-cols-[1fr_auto] mdxui:[.border-b]:pb-2',
        className,
      )}
      {...props}
    />
  );
}

function CardTitle({ className, ...props }: React.ComponentProps<'div'>) {
  return (
    <div
      data-slot="card-title"
      className={cn('mdxui:leading-none mdxui:font-semibold', className)}
      {...props}
    />
  );
}

function CardDescription({ className, ...props }: React.ComponentProps<'div'>) {
  return (
    <div
      data-slot="card-description"
      className={cn('mdxui:text-muted-foreground mdxui:text-sm', className)}
      {...props}
    />
  );
}

function CardAction({ className, ...props }: React.ComponentProps<'div'>) {
  return (
    <div
      data-slot="card-action"
      className={cn(
        'mdxui:col-start-2 mdxui:row-span-2 mdxui:row-start-1 mdxui:self-start mdxui:justify-self-end',
        className,
      )}
      {...props}
    />
  );
}

function CardContent({ className, ...props }: React.ComponentProps<'div'>) {
  return <div data-slot="card-content" className={cn('mdxui:px-4', className)} {...props} />;
}

function CardFooter({ className, ...props }: React.ComponentProps<'div'>) {
  return (
    <div
      data-slot="card-footer"
      className={cn('mdxui:flex mdxui:items-center mdxui:px-6 mdxui:[.border-t]:pt-6', className)}
      {...props}
    />
  );
}

export { Card, CardHeader, CardFooter, CardTitle, CardAction, CardDescription, CardContent };
