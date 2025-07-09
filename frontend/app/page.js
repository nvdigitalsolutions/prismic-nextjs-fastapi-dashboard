import { getClient } from '../lib/prismic'
import { SliceZone } from '@prismicio/react'
import RichText from '../components/RichText'

export default async function Page() {
  let page = null
  try {
    const client = getClient()
    page = await client.getByUID('page', 'home')
  } catch (error) {
    // ignore errors and show fallback
  }
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
