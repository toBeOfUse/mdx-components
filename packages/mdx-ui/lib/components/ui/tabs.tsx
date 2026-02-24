import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { Tabs as TabsPrimitive } from 'radix-ui';

import { cn } from '@/utils';

function Tabs({
  className,
  orientation = 'horizontal',
  ...props
}: React.ComponentProps<typeof TabsPrimitive.Root>) {
  return (
    <TabsPrimitive.Root
      data-slot="tabs"
      data-orientation={orientation}
      orientation={orientation}
      className={cn(
        'mdxui:group/tabs mdxui:flex mdxui:gap-2 mdxui:data-[orientation=horizontal]:flex-col',
        className,
      )}
      {...props}
    />
  );
}

const tabsListVariants = cva(
  'mdxui:rounded-lg mdxui:p-[3px] mdxui:group-data-[orientation=horizontal]/tabs:h-9 mdxui:data-[variant=line]:rounded-none mdxui:group/tabs-list mdxui:text-muted-foreground mdxui:inline-flex mdxui:w-fit mdxui:items-center mdxui:justify-center mdxui:group-data-[orientation=vertical]/tabs:h-fit mdxui:group-data-[orientation=vertical]/tabs:flex-col',
  {
    variants: {
      variant: {
        default: 'mdxui:bg-muted',
        line: 'mdxui:gap-1 mdxui:bg-transparent',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  },
);

function TabsList({
  className,
  variant = 'default',
  ...props
}: React.ComponentProps<typeof TabsPrimitive.List> & VariantProps<typeof tabsListVariants>) {
  return (
    <TabsPrimitive.List
      data-slot="tabs-list"
      data-variant={variant}
      className={cn(tabsListVariants({ variant }), className)}
      {...props}
    />
  );
}

function TabsTrigger({ className, ...props }: React.ComponentProps<typeof TabsPrimitive.Trigger>) {
  return (
    <TabsPrimitive.Trigger
      data-slot="tabs-trigger"
      className={cn(
        'mdxui:focus-visible:border-ring mdxui:focus-visible:ring-ring/50 mdxui:focus-visible:outline-ring mdxui:text-foreground/60 mdxui:hover:text-foreground mdxui:dark:text-muted-foreground mdxui:dark:hover:text-foreground mdxui:relative mdxui:inline-flex mdxui:h-[calc(100%-1px)] mdxui:flex-1 mdxui:items-center mdxui:justify-center mdxui:gap-1.5 mdxui:rounded-md mdxui:border mdxui:border-transparent mdxui:px-2 mdxui:py-1 mdxui:text-sm mdxui:font-medium mdxui:whitespace-nowrap mdxui:transition-all mdxui:group-data-[orientation=vertical]/tabs:w-full mdxui:group-data-[orientation=vertical]/tabs:justify-start mdxui:focus-visible:ring-[3px] mdxui:focus-visible:outline-1 mdxui:disabled:pointer-events-none mdxui:disabled:opacity-50 mdxui:group-data-[variant=default]/tabs-list:data-[state=active]:shadow-sm mdxui:group-data-[variant=line]/tabs-list:data-[state=active]:shadow-none mdxui:[&_svg]:pointer-events-none mdxui:[&_svg]:shrink-0 mdxui:[&_svg:not([class*=size-])]:size-4',
        'mdxui:group-data-[variant=line]/tabs-list:bg-transparent mdxui:group-data-[variant=line]/tabs-list:data-[state=active]:bg-transparent mdxui:dark:group-data-[variant=line]/tabs-list:data-[state=active]:border-transparent mdxui:dark:group-data-[variant=line]/tabs-list:data-[state=active]:bg-transparent',
        'mdxui:data-[state=active]:bg-background mdxui:dark:data-[state=active]:text-foreground mdxui:dark:data-[state=active]:border-input mdxui:dark:data-[state=active]:bg-input/30 mdxui:data-[state=active]:text-foreground',
        'mdxui:after:bg-foreground mdxui:after:absolute mdxui:after:opacity-0 mdxui:after:transition-opacity mdxui:group-data-[orientation=horizontal]/tabs:after:inset-x-0 mdxui:group-data-[orientation=horizontal]/tabs:after:bottom-[-5px] mdxui:group-data-[orientation=horizontal]/tabs:after:h-0.5 mdxui:group-data-[orientation=vertical]/tabs:after:inset-y-0 mdxui:group-data-[orientation=vertical]/tabs:after:-right-1 mdxui:group-data-[orientation=vertical]/tabs:after:w-0.5 mdxui:group-data-[variant=line]/tabs-list:data-[state=active]:after:opacity-100',
        className,
      )}
      {...props}
    />
  );
}

function TabsContent({ className, ...props }: React.ComponentProps<typeof TabsPrimitive.Content>) {
  return (
    <TabsPrimitive.Content
      data-slot="tabs-content"
      className={cn('mdxui:flex-1 mdxui:outline-none', className)}
      {...props}
    />
  );
}

export { Tabs, TabsList, TabsTrigger, TabsContent, tabsListVariants };
