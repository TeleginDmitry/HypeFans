// import { pathImages } from 'configs/index.config'
// import React, { ImgHTMLAttributes, SVGProps } from 'react'

import { useState } from 'react'

// type IconType = 'svg' | 'png' | 'jpg' | 'jpeg' | 'gif'

// interface SvgIconProps extends SVGProps<SVGSVGElement> {
// 	name: string
// 	type?: 'svg'
// }

// interface ImgIconProps extends ImgHTMLAttributes<HTMLImageElement> {
// 	name: string
// 	type: Exclude<IconType, 'svg'>
// }

// type IconProps<T extends IconType> = T extends 'svg'
// 	? SvgIconProps
// 	: ImgIconProps

// const Icon = <T extends IconType>({
// 	name,
// 	type = 'svg',
// 	...props
// }: IconProps<T>) => {
// 	let Icon = null
// 	try {
// 		if (type === 'svg') {
// 			Icon = require(`${pathImages}${name}.svg`).default
// 		} else {
// 			Icon = <img src={require(`${pathImages}${name}.${type}`).default} />
// 		}
// 	} catch (e) {
// 		console.error(`Не удалось загрузить иконку "${name}.${type}"`, e)
// 	}

// 	if (!Icon) {
// 		return null
// 	}

// 	return <Icon {...props} />
// }

// export default Icon

// import React, { ImgHTMLAttributes, SVGProps } from 'react'

// type IconType = 'svg' | 'png' | 'jpg' | 'jpeg' | 'gif'

// interface ImageProps extends ImgHTMLAttributes<HTMLImageElement> {
// 	src: string
// }
// interface SvgProps extends SVGProps<SVGSVGElement> {
// 	src: string
// }

// type Props = {
// 	src: string
// } & React.ImgHTMLAttributes<HTMLImageElement>

// const Icon = ({ src, ...rest }: Props) => {
// 	const isSVG = src.includes('svg')

// 	const [Tesf, setTesf] = useState(null)

// 	async function Test() {
// 		if (isSVG) {
// 			const SvgIcon = await import(`@assets/images/TEST/${src}`).then(
// 				module => {
// 					console.log(module)
// 					return module
// 				}
// 			)

// 			setTesf(<SvgIcon {...rest}></SvgIcon>)
// 		} else {
// 			const imgIcon = await import(`@assets/images/TEST/${src}`).then(
// 				module => module.default
// 			)
// 			setTesf(<img src={imgIcon} {...rest} />)
// 		}
// 	}

// 	try {
// 		Test()
// 	} catch (e) {
// 		console.error(`Не удалось загрузить иконку "${src}"`, e)
// 	}

// 	console.log(Tesf)

// 	return <Tesf></Tesf>
// }

// export default Icon

import React, { lazy, Suspense } from 'react'

type IconProps = {
	name: string
	width?: string
	height?: string
	className?: string
}

const Icon = ({ name, width = '24', height = '24', className }: IconProps) => {
	const [Tesf, setTesf] = useState(null)

	const SvgICon = require(`@assets/images/TEST/${name}.svg`).then(
		module => {
			setTesf(module.ReactComponent)
			return module
		}
	)
		console.log(SvgICon)
	if (Tesf) return <Tesf width={width} height={height} className={className}></Tesf>
}

export default Icon
