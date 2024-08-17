import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { Header } from '../../components/header/Header'
import { useGetPhoto } from '../../hooks/useGetPhoto'
import { useGetSigns } from '../../hooks/useGetSigns'

import styles from './SignList.module.scss'

export const SignList = () => {
	const navigate = useNavigate()
	const [language, setLanguage] = useState('')
	const { data, refetch } = useGetSigns(language)
	const { getPhoto } = useGetPhoto()
	const { period, horoscope } = data || {}

	useEffect(() => {
		refetch()
	}, [language, refetch])

	const handleLanguageChange = event => {
		setLanguage(event.target.value)
	}

	if (!horoscope) {
		return <div>Loading...</div>
	}

	return (
		<>
			<Header language={language} handleLanguageChange={handleLanguageChange} />
			<main>
				<div className={styles.signList}>
					{Object.keys(horoscope).map(sign => (
						<div
							className={styles.signItem}
							key={sign}
							onClick={() => navigate(`/${sign}`)}
						>
							<img
								className={styles.signIcon}
								src={getPhoto(sign)}
								alt={sign}
							/>
							<h2 className={styles.signName}>{sign}</h2>
							<span className={styles.signTime}>
								{period === 'today' && 'Сегодня'}
							</span>
						</div>
					))}
				</div>
			</main>
		</>
	)
}
