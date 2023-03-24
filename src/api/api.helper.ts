export const getContentType = () => ({
	'Content-Type': 'application/json',
})

export const errorCatch = (err: any) => {
	const code = err?.response?.data?.code
	return code 
		
}
