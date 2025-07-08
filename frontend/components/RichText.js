import { PrismicRichText } from '@prismicio/react'
import { PrismicNextLink } from '@prismicio/next'

const components = {
  hyperlink: ({ node, children }) => (
    <PrismicNextLink field={node.data}>{children}</PrismicNextLink>
  ),
  label: ({ node, children }) => {
    if (node.data.label === 'codespan') {
      return <code>{children}</code>
    }
  },
}

export default function RichText({ slice }) {
  return (
    <section className="max-w-2xl mx-auto my-24">
      <PrismicRichText field={slice.primary.content} components={components} />
    </section>
  )
}
