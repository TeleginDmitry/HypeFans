import { useState, useEffect } from 'react'

type ValueSetter<T> = (value: T | ((prevValue: T) => T)) => void

function useLocalStorage<T>(key: string, initialValue: T): [T, ValueSetter<T>] {
	const storedValue = localStorage.getItem(key)
	const initialStoredValue = storedValue
		? JSON.parse(storedValue)
		: initialValue

	const [value, setValue] = useState<T>(initialStoredValue)

	useEffect(() => {
		localStorage.setItem(key, JSON.stringify(value))
	}, [key, value])

	return [value, setValue]
}

export default useLocalStorage
