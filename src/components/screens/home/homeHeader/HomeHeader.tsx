import React, { useState } from 'react'
import styles from './HomeHeader.module.scss'
import { motion, AnimatePresence } from 'framer-motion'
import { ReactComponent as Search } from '@assets/images/homeHeader/search.svg'
import { ReactComponent as Clear } from '@assets/images/homeHeader/clear.svg'
import logo from '@assets/images/homeHeader/logo.png'
import { classNames as cn } from '../../../../utils/classNames/classNames'

export default function HomeHeader() {
	const [isActiveSearch, setIsActiveSearch] = useState(false)
	const [inputValue, setInputValue] = useState('')

	function handlerClickSearch() {
		setIsActiveSearch(state => (state = !state))
	}

	const handlerChangeInput: React.ChangeEventHandler<
		HTMLInputElement
	> = input => {
		setInputValue(input.target.value)
	}

	const handlerClear = () => {
		setInputValue('')
	}

	return (
		<div
			className={
				isActiveSearch
					? cn([styles.header, styles.header__active])
					: cn([styles.header])
			}
		>
			<div className={styles.header__block}>
				<AnimatePresence exitBeforeEnter>
					{isActiveSearch ? (
						<motion.div
							key={`${isActiveSearch}`}
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							exit={{ opacity: 0 }}
							transition={{ duration: 0.3 }}
							className={styles.input__container}
						>
							<Clear
								onClick={handlerClear}
								className={styles.input__svg}
							></Clear>
							<input
								onChange={handlerChangeInput}
								value={inputValue}
								placeholder='Поиск профиля...'
								className={styles.input}
								type='text'
							/>
						</motion.div>
					) : (
						<motion.div
							key={`${isActiveSearch}`}
							transition={{ duration: 0.3 }}
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							exit={{ opacity: 0 }}
							className={styles.logo__container}
						>
							<img className={styles.logo} src={logo} alt='HypeFans' />
						</motion.div>
					)}
				</AnimatePresence>
			</div>
			<div onClick={handlerClickSearch} className={styles.search__container}>
				<Search className={styles.search}></Search>
			</div>
		</div>
	)
}
