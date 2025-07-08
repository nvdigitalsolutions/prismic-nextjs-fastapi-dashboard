import { client } from '../lib/prismic'
import { asText } from '@prismicio/client'

export async function getStaticProps() {
  try {
    const page = await client.getByUID('page', 'home')
    return { props: { page } }
  } catch (error) {
    // Gracefully handle missing Prismic content to prevent build failures
    return { props: { page: null } }
  }
}

export default function Home({ page }) {
  return (
    <div className="h-screen flex items-center justify-center">
      <h1 className="text-4xl font-bold">
        {page ? asText(page.data.title) : 'Prismic Not Connected'}
      </h1>
    </div>
  )
}
