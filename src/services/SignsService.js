import axios from 'axios'

export default class SignsService {
	static async getSigns(language) {
		const response = await axios.post(
			'https://poker247tech.ru/get_horoscope/',
			{
				language: language,
				period: 'today',
			}
		)

		return response
	}

	static async getSign(language, sign) {
		const response = await axios.post(
			'https://poker247tech.ru/get_horoscope/',
			{
				sign: sign,
				language: language,
				period: 'today',
			}
		)
		console.log('response', response)
		return response
	}
}
