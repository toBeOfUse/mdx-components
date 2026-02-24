import * as React from 'react';
import { ChevronDownIcon } from 'lucide-react';
import { Accordion as AccordionPrimitive } from 'radix-ui';

import { cn } from '@/utils';

function Accordion({ ...props }: React.ComponentProps<typeof AccordionPrimitive.Root>) {
  return <AccordionPrimitive.Root data-slot="accordion" {...props} />;
}

function AccordionItem({
  className,
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Item>) {
  return (
    <AccordionPrimitive.Item
      data-slot="accordion-item"
      className={cn('mdxui:border-b mdxui:last:border-b-0', className)}
      {...props}
    />
  );
}

function AccordionTrigger({
  className,
  children,
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Trigger>) {
  return (
    <AccordionPrimitive.Header className="mdxui:flex">
      <AccordionPrimitive.Trigger
        data-slot="accordion-trigger"
        className={cn(
          'mdxui:focus-visible:border-ring mdxui:focus-visible:ring-ring/50 mdxui:flex mdxui:flex-1 mdxui:items-start mdxui:justify-between mdxui:gap-4 mdxui:rounded-md mdxui:py-4 mdxui:text-left mdxui:text-sm mdxui:font-medium mdxui:transition-all mdxui:outline-none mdxui:hover:underline mdxui:focus-visible:ring-[3px] mdxui:disabled:pointer-events-none mdxui:disabled:opacity-50 mdxui:[&[data-state=open]>svg]:rotate-180',
          className,
        )}
        {...props}
      >
        {children}
        <ChevronDownIcon className="mdxui:text-muted-foreground mdxui:pointer-events-none mdxui:size-4 mdxui:shrink-0 mdxui:translate-y-0.5 mdxui:transition-transform mdxui:duration-200" />
      </AccordionPrimitive.Trigger>
    </AccordionPrimitive.Header>
  );
}

function AccordionContent({
  className,
  children,
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Content>) {
  return (
    <AccordionPrimitive.Content
      data-slot="accordion-content"
      className="mdxui:data-[state=closed]:animate-accordion-up mdxui:data-[state=open]:animate-accordion-down mdxui:overflow-hidden mdxui:text-sm"
      {...props}
    >
      <div className={cn('mdxui:pt-0 mdxui:pb-4', className)}>{children}</div>
    </AccordionPrimitive.Content>
  );
}

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent };
