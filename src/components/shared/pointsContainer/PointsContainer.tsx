import Points from 'components/ui/points/Points'
import React, { useState } from 'react'
import styles from './PointsContainer.module.scss'

interface IPointsContainer {
	children: React.ReactNode
}

const PointsContainer = ({ children }: IPointsContainer) => {
	const [isVisibleActions, setIsVisibleActions] = useState(false)

	function changeStateActions() {
		setIsVisibleActions(state => !state)
	}

	return (
		<div className={styles.wrapper}>
			<Points onClick={changeStateActions}></Points>
			{isVisibleActions && children}
		</div>
	)
}

export default PointsContainer
