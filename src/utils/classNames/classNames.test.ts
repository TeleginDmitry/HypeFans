import cn from './classNames'

describe('test classNames', () => {
  test('have one classes', () => {
    expect(cn(['main'])).toBe('main')
  })

  test('have a few class', () => {
    expect(cn(['main', 'secondary'])).toBe('main secondary')
  })

  test('have a few class and one condition', () => {
    expect(cn(['main', 'secondary'], { is_active: true })).toBe(
      'main secondary is_active'
    )
  })

  test('have a few class and two condition', () => {
    expect(
      cn(['main', 'secondary'], { is_toggle: false, is_active: true })
    ).toBe('main secondary is_active')
  })

  test('dont have any classes', () => {
    expect(cn([])).toBe('')
  })

  test('dont have any params', () => {
    expect(cn()).toBe('')
  })
})
