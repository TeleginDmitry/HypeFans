import { ReactComponent as CloseSvg } from 'assets/images/close.svg'
import React from 'react'

import styles from './Close.module.scss'

interface IClose extends React.SVGProps<SVGSVGElement> {
  classSvg?: string
}

const Close = ({ classSvg, ...svgProps }: IClose) => {
  const completeClass = styles.icon + ' ' + classSvg

  return <CloseSvg className={completeClass} {...svgProps}></CloseSvg>
}

export default Close
