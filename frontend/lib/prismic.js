import * as prismic from '@prismicio/client'
export const repositoryName =
  process.env.PRISMIC_REPO_NAME || 'prismic-nextjs-fastapi-dashboard'

export function getClient(options = {}) {
  return prismic.createClient(repositoryName, {
    accessToken: process.env.PRISMIC_ACCESS_TOKEN,
    ...options,
  })
}