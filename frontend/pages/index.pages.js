import { getClient } from '../lib/prismic'
import { SliceZone } from '@prismicio/react'
import RichText from '../components/RichText'

export async function getStaticProps() {
  try {
    const client = getClient()
    const page = await client.getByUID('page', 'home')
    return { props: { page } }
  } catch (error) {
    // Gracefully handle missing Prismic content to prevent build failures
    return { props: { page: null } }
  }
}

export default function Home({ page }) {
  if (!page) {
    return (
      <div className="h-screen flex items-center justify-center">
        <h1 className="text-4xl font-bold">Prismic Not Connected</h1>
      </div>
    )
  }

  const components = {
    rich_text: RichText,
  }

  return <SliceZone slices={page.data.slices} components={components} />
}
