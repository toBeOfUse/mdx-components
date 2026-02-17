import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Children, type ReactNode } from 'react';
import { scanForTag } from '../utils';

/**
 * This component takes HTML elements (from MDX) and turns them into tabs.
 * Each `<h4>` (`####` in Markdown) starts a new tab. The heading text becomes
 * the tab label, and everything until the next `<h4>` becomes the tab content.
 */
export function MdxTabs({ children }: { children: ReactNode }) {
  const childArray = Children.toArray(children);
  const isH4 = scanForTag('h4');

  const tabs: { label: ReactNode; content: ReactNode[] }[] = [];

  for (const child of childArray) {
    if (isH4(child)) {
      const heading = child as React.ReactElement<{ children: ReactNode }>;
      tabs.push({ label: heading.props.children, content: [] });
    } else if (tabs.length > 0) {
      tabs[tabs.length - 1].content.push(child);
    }
  }

  if (tabs.length === 0) {
    console.error('MdxTabs requires at least one <h4> (#### in markdown) to create tabs');
    return <p>ERROR</p>;
  }

  return (
    <Tabs defaultValue="tab-0" className="w-full my-4">
      <TabsList>
        {tabs.map((tab, i) => (
          <TabsTrigger key={i} value={`tab-${i}`}>
            {tab.label}
          </TabsTrigger>
        ))}
      </TabsList>
      {tabs.map((tab, i) => (
        <TabsContent key={i} value={`tab-${i}`} className="prose dark:prose-invert">
          {tab.content}
        </TabsContent>
      ))}
    </Tabs>
  );
}
