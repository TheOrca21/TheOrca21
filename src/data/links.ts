/**
 * External links — update these with your actual URLs before deploying.
 * Links are only rendered when a URL is provided.
 */
export const links = {
  email: 's.sudhakarsridharan@gmail.com',
  github: '' as string,
  linkedin: '' as string,
  resume: '' as string,
} as const

export function mailtoLink(email: string) {
  return `mailto:${email}`
}
