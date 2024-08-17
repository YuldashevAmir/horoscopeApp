import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'

import { Header } from '../../components/header/Header'
import { useGetSign } from '../../hooks/useGetSign'

import styles from './SignItem.module.scss'

export const SignItem = () => {
	const url = useLocation()
	const sign = url.pathname.split('/')[1]

	const [language, setLanguage] = useState('')
	const { data, refetch } = useGetSign(language, sign)

	const { horoscope } = data || {}

	useEffect(() => {
		refetch()
	}, [language, refetch])

	const handleLanguageChange = event => {
		setLanguage(event.target.value)
	}

	if (!horoscope || !sign) {
		return <div>Loading...</div>
	}

	return (
		<>
			<Header
				language={language}
				handleLanguageChange={handleLanguageChange}
			/>
			<main>
				<h1 className={styles.sign}>{sign}</h1>
				<p className={styles.article}>{horoscope}</p>
			</main>
		</>
	)
}
