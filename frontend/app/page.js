import { client } from '../lib/prismic'
import { asText } from '@prismicio/client'

export default async function Page() {
  let page = null
  try {
    page = await client.getByUID('page', 'home')
  } catch (error) {
    // ignore errors and show fallback
  }

  return (
    <div className="h-screen flex items-center justify-center">
      <h1 className="text-4xl font-bold">
        {page ? asText(page.data.title) : 'Prismic Not Connected'}
      </h1>
    </div>
  )
}
