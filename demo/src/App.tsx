import AccordionDemo from './content/AccordionDemo.mdx'
import PopoverDemo from './content/PopoverDemo.mdx'
import CarouselDemo from './content/CarouselDemo.mdx'
import { Playground } from './Playground'

function App() {
  return (
    <div style={{ maxWidth: 900, margin: '0 auto', padding: '2rem' }}>
      <h1 style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '1.5rem' }}>
        MDX Components Demo
      </h1>

      <section style={{ marginBottom: '2rem' }}>
        <h2 style={{ fontSize: '1.5rem', fontWeight: 600, marginBottom: '1rem' }}>
          Playground
        </h2>
        <p style={{ marginBottom: '1rem', color: '#6b7280', fontSize: '0.875rem' }}>
          Edit the MDX below. <code>MdxAccordion</code>, <code>MdxCarousel</code>, and <code>MdxPopover</code> are available without imports.
        </p>
        <Playground />
      </section>

      <section style={{ marginBottom: '2rem' }}>
        <h2 style={{ fontSize: '1.5rem', fontWeight: 600, marginBottom: '1rem' }}>
          Accordion Transformer
        </h2>
        <AccordionDemo />
      </section>

      <section style={{ marginBottom: '2rem' }}>
        <h2 style={{ fontSize: '1.5rem', fontWeight: 600, marginBottom: '1rem' }}>
          Popover Transformer
        </h2>
        <PopoverDemo />
      </section>

      <section style={{ marginBottom: '2rem' }}>
        <h2 style={{ fontSize: '1.5rem', fontWeight: 600, marginBottom: '1rem' }}>
          Carousel Transformer
        </h2>
        <CarouselDemo />
      </section>
    </div>
  )
}

export default App
