function getValueParamFromQuery(page: string, nameParam: string) {
	const url = new URL(page)
	const params = url.searchParams

	const result = params.get(nameParam)
	return result
}

export default getValueParamFromQuery
