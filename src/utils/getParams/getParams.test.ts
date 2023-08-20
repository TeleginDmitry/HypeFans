import getParams from './getParams'

describe('test getParams', () => {
  test('get params from link', () => {
    const link =
      'https://br.translate.yandex.com/?source_lang=ru&target_lang=en&text=%D1%81%D1%82%D1%80%D0%B0%D0%BD%D0%B8%D1%86%D0%B0'

    expect(getParams(link)).toEqual({
      source_lang: 'ru',
      target_lang: 'en',
      text: 'страница'
    })
  })

  test('test with without any params', () => {
    const link = 'https://br.translate.yandex.com'

    expect(getParams(link)).toEqual({})
  })

  test('test with incorrect link', () => {
    const link = ''

    expect(getParams(link)).toBeNull()
  })
})
