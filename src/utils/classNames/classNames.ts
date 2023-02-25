export const classNames = (classes: string[]) => {
	let result = ''

	const maxIndex = classNames.length - 1

	classes.forEach((cls, index) => {
		result += maxIndex === index ? `${cls} ` : `${cls}`
	})

	return result
}
