import React, { useState } from 'react'
import { classNames as cn } from '@utils/classNames/classNames'
import styles from './CreationPost.module.scss'
import { ReactComponent as Clear } from '@assets/images/homeHeader/clear.svg'
import { ReactComponent as Search } from '@assets/images/homeHeader/search.svg'
import { motion, AnimatePresence } from 'framer-motion'
import { useAppSelector } from 'hooks/ReduxHooks'
import { API_URL } from 'configs/api.config'

const CreationPost = () => {
	const [isActiveSearch, setIsActiveSearch] = useState(false)

	const user = useAppSelector(state => state.auth.user)

	return (
		<div className={isActiveSearch
      ? cn([styles.wrapper, styles.wrapper__active])
      : styles.wrapper}>
			<div
				className={
					styles.content
				}
			>
				<AnimatePresence exitBeforeEnter>
					{isActiveSearch ? (
						<motion.div
							key={`${isActiveSearch}`}
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							exit={{ opacity: 0 }}
							transition={{ duration: 0.3 }}
							className={styles.search}
						>
							<div className={styles.clear__container}>
								<Clear className={styles.clear}></Clear>
							</div>
							<div className={styles.search__container}>
								<input
									className={styles.search__input}
									type='text'
									placeholder='Поиск профиля...'
								/>
							</div>
						</motion.div>
					) : (
						<motion.div
							key={`${isActiveSearch}`}
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							exit={{ opacity: 0 }}
							transition={{ duration: 0.3 }}
							className={styles.creation}
						>
							<div className={styles.logo__container}>
								<img
									className={styles.logo}
									src={API_URL + user?.avatar}
									alt='HypeFans'
								/>
							</div>
							<div className={styles.creation__container}>
								<input
									className={styles.creation__input}
									type='text'
									placeholder='Хей, о чем ты думаешь?'
								/>
							</div>
						</motion.div>
					)}
				</AnimatePresence>
			</div>
			<div
				onClick={() => {
					setIsActiveSearch(state => (state = !state))
				}}
				className={styles.toggle__container}
			>
				<Search className={styles.toggle}></Search>
			</div>
		</div>
	)
}

export default CreationPost
