'use client';

import * as React from 'react';
import { Tooltip as TooltipPrimitive } from 'radix-ui';

import { cn } from '@/utils';

function TooltipProvider({
  delayDuration = 0,
  ...props
}: React.ComponentProps<typeof TooltipPrimitive.Provider>) {
  return (
    <TooltipPrimitive.Provider
      data-slot="tooltip-provider"
      delayDuration={delayDuration}
      {...props}
    />
  );
}

function Tooltip({ ...props }: React.ComponentProps<typeof TooltipPrimitive.Root>) {
  return <TooltipPrimitive.Root data-slot="tooltip" {...props} />;
}

function TooltipTrigger({ ...props }: React.ComponentProps<typeof TooltipPrimitive.Trigger>) {
  return <TooltipPrimitive.Trigger data-slot="tooltip-trigger" {...props} />;
}

function TooltipContent({
  className,
  sideOffset = 0,
  children,
  ...props
}: React.ComponentProps<typeof TooltipPrimitive.Content>) {
  return (
    <TooltipPrimitive.Portal>
      <TooltipPrimitive.Content
        data-slot="tooltip-content"
        sideOffset={sideOffset}
        className={cn(
          'mdxui:bg-foreground mdxui:text-background mdxui:animate-in mdxui:fade-in-0 mdxui:zoom-in-95 mdxui:data-[state=closed]:animate-out mdxui:data-[state=closed]:fade-out-0 mdxui:data-[state=closed]:zoom-out-95 mdxui:data-[side=bottom]:slide-in-from-top-2 mdxui:data-[side=left]:slide-in-from-right-2 mdxui:data-[side=right]:slide-in-from-left-2 mdxui:data-[side=top]:slide-in-from-bottom-2 mdxui:z-50 mdxui:w-fit mdxui:origin-(--radix-tooltip-content-transform-origin) mdxui:rounded-md mdxui:px-3 mdxui:py-1.5 mdxui:text-xs mdxui:text-balance',
          className,
        )}
        {...props}
      >
        {children}
        <TooltipPrimitive.Arrow className="mdxui:bg-foreground mdxui:fill-foreground mdxui:z-50 mdxui:size-2.5 mdxui:translate-y-[calc(-50%_-_2px)] mdxui:rotate-45 mdxui:rounded-[2px]" />
      </TooltipPrimitive.Content>
    </TooltipPrimitive.Portal>
  );
}

export { Tooltip, TooltipTrigger, TooltipContent, TooltipProvider };
