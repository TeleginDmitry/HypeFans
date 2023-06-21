import React, { useState, useRef } from 'react'
import styles from './SearchPost.module.scss'
import { ReactComponent as Cancel } from '@assets/images/homeHeader/clear.svg'
import { ReactComponent as Search } from '@assets/images/homeHeader/search.svg'
import MyAvatar from 'components/shared/myAvatar/MyAvatar'
import { useTypedSelector } from 'hooks/useTypedSelector'
import SearchPostList from './searchPostList/SearchPostList'
import { useNavigate } from 'react-router-dom'
import { POST_PARAM } from 'configs/index.config'
import cn from '@utils/classNames/classNames'

interface ISearchPost {
	changeStateActive: () => void
}

const SearchPost = ({ changeStateActive }: ISearchPost) => {
	const navigate = useNavigate()

	const isAuth = useTypedSelector(state => state.auth.isAuth)

	const inputRef = useRef<HTMLInputElement>(null)

	const [valueInput, setValueInput] = useState('')

	function onChange(input: React.ChangeEvent<HTMLInputElement>) {
		setValueInput(input.target.value)
	}

	function focusInput() {
		if (inputRef.current) {
			inputRef.current.focus()
		}
	}

	function onClickPost(post_id: number) {
		setValueInput('')

		navigate(`/?${POST_PARAM}=${post_id}`)
	}

	return (
		<div className={cn([styles.wrapper], [valueInput, styles.wrapper__active])}>
			{isAuth && <MyAvatar />}

			<div className={styles.searching}>
				<input
					className={styles.searching__input}
					type='text'
					placeholder='Поиск поста...'
					onChange={onChange}
					value={valueInput}
					ref={inputRef}
				/>
			</div>
			{isAuth ? (
				<div onClick={changeStateActive} className={styles.icon__container}>
					<Cancel className={styles.icon}></Cancel>
				</div>
			) : (
				<div onClick={focusInput} className={styles.icon__container}>
					<Search className={styles.icon}></Search>
				</div>
			)}

			{valueInput && (
				<SearchPostList
					valueInput={valueInput}
					onClickPost={onClickPost}
				></SearchPostList>
			)}
		</div>
	)
}

export default SearchPost
