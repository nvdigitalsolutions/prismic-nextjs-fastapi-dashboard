import { client } from '../lib/prismic'

export default async function Page() {
  let page = null
  try {
    page = await client.getSingle('homepage')
  } catch (error) {
    // ignore errors and show fallback
  }

  return (
    <div className="h-screen flex items-center justify-center">
      <h1 className="text-4xl font-bold">
        {page ? page.data.title : 'Prisim Not Connected'}
      </h1>
    </div>
  )
}
