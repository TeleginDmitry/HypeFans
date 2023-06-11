import { useCallback, useState } from 'react'

export const useCopyToClipboard = () => {
	const [isCopied, setCopied] = useState(false)
	const [isError, setError] = useState(false)

	const copy = useCallback((text: string) => {
		navigator.clipboard
			.writeText(text)
			.then(() => setCopied(true))
			.catch(() => setError(true))
	}, [])

	return { isCopied, isError, copy }
}
