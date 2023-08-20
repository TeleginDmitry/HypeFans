import createContainer from './createContainer'

describe('test createContainer', () => {
  test('create div element with div id', () => {
    createContainer({ id: 'div' })

    const element = document.querySelector('#div')
    expect(element).toBeDefined()
  })

  test('create p element with p id in html element', () => {
    createContainer({ mountNode: document.querySelector('html'), id: 'p' })

    const element = document.querySelector('#p')
    expect(element).toBeDefined()
  })

  test('create h1 element with h1 id in unknown element', () => {
    createContainer({ mountNode: document.querySelector('.unknown'), id: 'h1' })

    const element = document.querySelector('#h1')
    expect(element).toBeNull()
  })
})
