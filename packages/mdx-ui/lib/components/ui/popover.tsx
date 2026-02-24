import * as React from 'react';
import { Popover as PopoverPrimitive } from 'radix-ui';

import { cn } from '@/utils';

function Popover({ ...props }: React.ComponentProps<typeof PopoverPrimitive.Root>) {
  return <PopoverPrimitive.Root data-slot="popover" {...props} />;
}

function PopoverTrigger({ ...props }: React.ComponentProps<typeof PopoverPrimitive.Trigger>) {
  return <PopoverPrimitive.Trigger data-slot="popover-trigger" {...props} />;
}

function PopoverContent({
  className,
  align = 'center',
  sideOffset = 4,
  ...props
}: React.ComponentProps<typeof PopoverPrimitive.Content>) {
  return (
    <PopoverPrimitive.Portal>
      <PopoverPrimitive.Content
        data-slot="popover-content"
        align={align}
        sideOffset={sideOffset}
        className={cn(
          'mdxui:bg-popover mdxui:text-popover-foreground mdxui:data-[state=open]:animate-in mdxui:data-[state=closed]:animate-out mdxui:data-[state=closed]:fade-out-0 mdxui:data-[state=open]:fade-in-0 mdxui:data-[state=closed]:zoom-out-95 mdxui:data-[state=open]:zoom-in-95 mdxui:data-[side=bottom]:slide-in-from-top-2 mdxui:data-[side=left]:slide-in-from-right-2 mdxui:data-[side=right]:slide-in-from-left-2 mdxui:data-[side=top]:slide-in-from-bottom-2 mdxui:z-50 mdxui:w-72 mdxui:origin-(--radix-popover-content-transform-origin) mdxui:rounded-md mdxui:border mdxui:p-4 mdxui:shadow-md mdxui:outline-hidden',
          className,
        )}
        {...props}
      />
    </PopoverPrimitive.Portal>
  );
}

function PopoverAnchor({ ...props }: React.ComponentProps<typeof PopoverPrimitive.Anchor>) {
  return <PopoverPrimitive.Anchor data-slot="popover-anchor" {...props} />;
}

function PopoverHeader({ className, ...props }: React.ComponentProps<'div'>) {
  return (
    <div
      data-slot="popover-header"
      className={cn('mdxui:flex mdxui:flex-col mdxui:gap-1 mdxui:text-sm', className)}
      {...props}
    />
  );
}

function PopoverTitle({ className, ...props }: React.ComponentProps<'h2'>) {
  return (
    <div data-slot="popover-title" className={cn('mdxui:font-medium', className)} {...props} />
  );
}

function PopoverDescription({ className, ...props }: React.ComponentProps<'p'>) {
  return (
    <p
      data-slot="popover-description"
      className={cn('mdxui:text-muted-foreground', className)}
      {...props}
    />
  );
}

export {
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverAnchor,
  PopoverHeader,
  PopoverTitle,
  PopoverDescription,
};
