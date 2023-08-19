import { createPortal } from 'react-dom'

const PORTAL_ERROR_MSG = 'Данного элемента на странице, не существует.'

interface IPortal {
  children: React.ReactNode
  element: Element
}

const Portal = ({ children, element }: IPortal) => {
  if (!element) throw Error(PORTAL_ERROR_MSG)
  return createPortal(children, element)
}

export default Portal
