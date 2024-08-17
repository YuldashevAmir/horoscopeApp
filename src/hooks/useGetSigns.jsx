import { useCallback, useEffect, useState } from 'react'

import SignsService from '../services/SignsService'

export const useGetSigns = language => {
	const [data, setData] = useState({})

	const fetchSigns = useCallback(async () => {
		try {
			const response = await SignsService.getSigns(language)
			setData(response.data)
		} catch (error) {
			console.error('Failed to fetch signs:', error)
		}
	}, [language])

	useEffect(() => {
		fetchSigns()
	}, [fetchSigns])

	return { data, refetch: fetchSigns }
}
