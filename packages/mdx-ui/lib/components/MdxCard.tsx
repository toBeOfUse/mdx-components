import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Children, type ReactNode } from 'react';
import { scanForTag } from '../utils';

/**
 * This component takes some HTML elements, like the ones that the Markdown in
 * MDX files is turned into, and turns them into a card.
 *
 * Cards have a header and some content. This component applies the following
 * rules to its child elements:
 *
 * 1. If there is a horizontal rule (<hr /> produced by a Markdown `---`), then
 *    everything before the horizontal rule is treated as the header, and
 *    everything after is treated as content.
 * 2. Otherwise, the first child element is treated as the header, and
 *    everything after is treated as content.
 */
export function MdxCard({ children }: { children: ReactNode }) {
  const childArray = Children.toArray(children);
  let hrLocation = childArray.findIndex(scanForTag('hr'));
  const hrFound = hrLocation !== -1;
  if (!hrFound) {
    hrLocation = 1;
  }
  const headerChildren = childArray.slice(0, hrLocation);
  const contentChildren = childArray.slice(hrLocation + (hrFound ? 1 : 0));

  return (
    <Card className="mdxui:my-4">
      {headerChildren.length > 0 && (
        <CardHeader>
          <CardTitle className="mdxui:*:m-0 mdxui:prose mdxui:dark:prose-invert">
            {headerChildren[0]}
          </CardTitle>
          <CardDescription className="mdxui:prose mdxui:dark:prose-invert mdxui:*:m-0">
            {...headerChildren.slice(1)}
          </CardDescription>
        </CardHeader>
      )}
      {contentChildren.length > 0 && (
        <CardContent className="mdxui:prose mdxui:dark:prose-invert">{contentChildren}</CardContent>
      )}
    </Card>
  );
}

/**
 * This component takes some HTML elements and renders a series of MdxCards
 * horizontally in an x-scrolling container.
 *
 * Cards are separated by horizontal rules (<hr /> produced by `---` in
 * Markdown) or <h1> elements. The first child of each section becomes the card
 * header, and the remaining children become the card content.
 */
export function MdxCardSet({ children }: { children: ReactNode }) {
  const childArray = Children.toArray(children);
  const isHr = scanForTag('hr');
  const isH1 = scanForTag('h1');

  const sections: ReactNode[][] = [[]];
  for (const child of childArray) {
    if (isHr(child)) {
      sections.push([]);
    } else if (isH1(child)) {
      sections.push([{ ...(child as React.ReactElement), type: 'span' }]);
    } else {
      sections[sections.length - 1].push(child);
    }
  }

  const cards = sections
    .filter((s) => s.length > 0)
    .map((s) => ({ header: s[0], content: s.slice(1) }));

  return (
    <div
      className="mdxui:flex mdxui:flex-row mdxui:gap-4 mdxui:overflow-x-auto mdxui:py-2 mdxui:my-4"
      style={{ scrollbarWidth: 'thin' }}
    >
      {cards.map(({ header, content }, i) => (
        <Card key={i} className="mdxui:min-w-64 mdxui:max-w-[80%] mdxui:shrink-0 mdxui:gap-2">
          <CardHeader className="mdxui:pb-0">
            <CardTitle className="mdxui:*:m-0 mdxui:prose mdxui:dark:prose-invert">
              {header}
            </CardTitle>
          </CardHeader>
          {content.length > 0 && (
            <CardContent className="mdxui:prose mdxui:dark:prose-invert">{content}</CardContent>
          )}
        </Card>
      ))}
    </div>
  );
}
