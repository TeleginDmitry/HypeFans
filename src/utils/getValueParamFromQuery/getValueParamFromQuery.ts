function getValueParamFromQuery(page: string, nameParam: string) {
  if (!page || !nameParam) return

  const url = new URL(page)
  const params = url.searchParams

  const result = params.get(nameParam)

  return result || undefined
}

export default getValueParamFromQuery
