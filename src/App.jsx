import { useEffect } from 'react'

import './index.scss'
import { AppRouter } from './router/AppRouter'

const tg = window.Telegram.WebApp

function App() {
	useEffect(() => {
		tg.ready()
	}, [])

	return (
		<div className='container'>
			<AppRouter />
		</div>
	)
}

export default App
