import React, { ReactNode } from 'react'

interface IconProps {
	src: string
	alt?: string
	className?: string
	style?: React.CSSProperties
}

const Icon = ({ src, alt, className, style }: IconProps) => {
	const fileExtension = src.split('.').pop()?.toLowerCase()

	if (!src) return null

	const imagePath = `../../../assets/images/TEST/${src}`

	if (fileExtension === 'svg') {
		// Если расширение файла svg, возвращаем компонент svg
		return (
			<svg
				className={className}
				style={style}
				role='img'
				aria-label={alt}
				dangerouslySetInnerHTML={{
					__html: require(imagePath).default,
				}}
			/>
		)
	}

	// Для других форматов используем тег img
	return (
		<img
			className={className}
			style={style}
			src={require(imagePath).default}
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
