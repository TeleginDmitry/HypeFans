import { useState } from 'react'

interface IUseFormik<T> {
  onSubmit(values: T): void
  initialValues: T
}

export function useFormik<T>({ initialValues, onSubmit }: IUseFormik<T>) {
  const [isSubmiting, setIsSubmiting] = useState(false)

  function handlerSubmit(event: React.FormEvent<HTMLFormElement>) {}

  return { handlerSubmit, isSubmiting }
}
