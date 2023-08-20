type IConditions = { [key: string]: boolean | string }

export default function cn(
  defaultClasses?: string[],
  conditions?: IConditions
) {
  if (!defaultClasses) return ''

  const result = [...defaultClasses]

  if (!conditions) return result.join(' ')

  const conditionsKeys = Object.keys(conditions)

  if (!conditionsKeys.length) return result.join(' ')

  conditionsKeys.forEach((cls) => {
    const value = conditions[cls]
    if (value) {
      result.push(cls)
    }
  })

  return result.join(' ')
}
