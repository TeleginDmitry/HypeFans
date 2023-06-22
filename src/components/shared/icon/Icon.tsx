import React from 'react'

interface IconProps {
  style?: React.CSSProperties
  className?: string
  alt?: string
  src: string
}

const Icon = ({ className, style, alt, src }: IconProps) => {
  const fileExtension = src.split('.').pop()?.toLowerCase()

  if (!src) return null

  const imagePath = `../../../assets/images/TEST/${src}`

  if (fileExtension === 'svg') {
    // Если расширение файла svg, возвращаем компонент svg
    return (
      <svg
        dangerouslySetInnerHTML={{
          __html: require(imagePath).default
        }}
        className={className}
        aria-label={alt}
        style={style}
        role='img'
      />
    )
  }

  // Для других форматов используем тег img
  return (
    <img
      src={require(imagePath).default}
      className={className}
      style={style}
      alt={alt}
    />
  )
}

export default Icon

// import React, { lazy, Suspense } from 'react'

// type IconProps = {
// 	name: string
// 	width?: string
// 	height?: string
// 	className?: string
// }

// const Icon = ({ name, width = '24', height = '24', className }: IconProps) => {
// 	const [Tesf, setTesf] = useState(null)

// 	const SvgICon = require(`@assets/images/TEST/${name}.svg`).then(
// 		module => {
// 			setTesf(module.ReactComponent)
// 			return module
// 		}
// 	)
// 		console.log(SvgICon)
// 	if (Tesf) return <Tesf width={width} height={height} className={className}></Tesf>
// }

// export default Icon
