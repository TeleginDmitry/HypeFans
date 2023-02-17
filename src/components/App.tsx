import React from 'react'
import Header from './layout/header/Header'
import styles from './App.module.scss'

export default function App() {
	return (
		<div className={styles.wrapper}>
			<Header></Header>
		</div>
	)
}
