import { ThemeToggle } from './ThemeToggle'
import { MdxExample } from './MdxExample'
import './App.css'

const accordionMdx = `**Click to expand**

Hi! Here is some content.`

const alertMdx = `###### Heads up!

This component renders a styled
alert from plain Markdown.`

const tabsMdx = `#### Tab A
This tab has content. Content about,
perhaps, weasels.

#### Tab B
Ferrets are different from weasels.`

function App() {
  return (
    <div className="app">
      <ThemeToggle />
      <div className="app-header">
        <h1>MDX Components</h1>
        <p>Drop-in components that turn simple Markdown into interactive UI.</p>
      </div>
      <div className="examples-grid">
        <div>
          <MdxExample component="MdxAccordion" mdx={accordionMdx} />
        </div>
        <div>
          <MdxExample component="MdxAlert" attrs='variant="info"' mdx={alertMdx} />
        </div>
        <div>
          <MdxExample component="MdxTabs" mdx={tabsMdx} />
        </div>
      </div>
    </div>
  )
}

export default App
