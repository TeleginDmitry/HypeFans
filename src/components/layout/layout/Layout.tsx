import Header from '@components/shared/header/Header'
import styles from './Layout.module.scss'
import { Outlet } from 'react-router-dom'
import Preview from '../../shared/preview/Preview'

export function Layout() {
	return (
		<div className={styles.wrapper}>
			<Header></Header>
			<div className={styles.content}>
				<Outlet />
			</div>
			<Preview></Preview>
		</div>
	)
}
