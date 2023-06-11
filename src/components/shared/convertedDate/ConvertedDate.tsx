import React from 'react'
import styles from './ConvertedDate.module.scss'
import convertDate from 'utils/ConvertDate/ConvertDate'

interface IConvertedDate {
	date: string
}

const ConvertedDate = ({ date }: IConvertedDate) => {
	const formattedDate = convertDate(date)

	return (
		<div className={styles.wrapper}>
			<p className={styles.time}>{formattedDate}</p>
		</div>
	)
}

export default ConvertedDate
