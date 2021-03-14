const isDev =
  process.env.VERCEL_ENV === 'preview' || process.env.NODE_ENV === 'development'

module.exports = {
  basePath: isDev ? '' : 'https://jeremyfreeman.net/blog',
}