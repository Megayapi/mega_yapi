export interface PhotoMate {
  text?: string
  lang?: string
  blurhash?: string
}

export interface Photo extends PhotoMate {
  name: string
  url: string
  key: string
}

const photos = Object.entries(
  import.meta.glob<string>('./**/*.{jpg,png,JPG,PNG}', {
    eager: true,
    query: '?url',
    import: 'default',
  }),
)
  .map(([name, url]): Photo => {
    name = name.replace(/\.\w+$/, '').replace(/^\.\//, '')
    return {
      name,
      url,
      key: name.split('/')[0] ?? '',
    }
  })
  .sort((a, b) => b.name.localeCompare(a.name))

export default photos
