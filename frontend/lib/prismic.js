import * as prismic from '@prismicio/client'

export const repositoryName = process.env.PRISMIC_REPO_NAME || 'prismic-nextjs-fastapi-dashboard'
export const client = prismic.createClient(repositoryName, {
  accessToken: process.env.PRISMIC_ACCESS_TOKEN,
})