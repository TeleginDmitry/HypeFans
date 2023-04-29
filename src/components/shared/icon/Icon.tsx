// import { pathImages } from 'configs/index.config'
// import React, { ImgHTMLAttributes, SVGProps } from 'react'

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

import { pathImages } from 'configs/index.config'

import React from 'react'

type IconProps = React.ImgHTMLAttributes<HTMLImageElement>

interface Props extends Omit<IconProps, 'src'> {
	src: string
}

const Icon = ({ src, ...rest }: Props) => {
	const isSVG = src.endsWith('.svg')

	try {
		if (isSVG) {
			const SvgIcon = require(`${pathImages}${src}`).default

			return <SvgIcon {...rest} />
		}

		const imgProps: IconProps = {
			...rest,
			src: require(`${pathImages}${src}`).default,
		}

		return <img {...imgProps} />
	} catch (e) {
		console.error(`Не удалось загрузить иконку "${src}"`, e)
	}
}

export default Icon
