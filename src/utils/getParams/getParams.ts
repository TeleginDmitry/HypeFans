function getParams(link: string) {
  if (!link) return null

  const url = new URL(link)
  const params = url.searchParams

  const result = {}

  params.forEach((value, key) => {
    result[key] = value
  })

  return result
}

export default getParams
