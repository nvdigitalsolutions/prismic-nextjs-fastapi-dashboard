import { client } from '../lib/prismic'

export async function getStaticProps() {
  const page = await client.getSingle('homepage')
  return { props: { page } }
}

export default function Home({ page }) {
  return (
    <div className="h-screen flex items-center justify-center">
      <h1 className="text-4xl font-bold">{page.data.title}</h1>
    </div>
  )
}