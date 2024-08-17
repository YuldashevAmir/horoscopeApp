import { BrowserRouter, Route, Routes } from 'react-router-dom'

import { SignItem } from '../pages/SignItemPage/SignItem'
import { SignList } from '../pages/SignListPage/SignList'

export const AppRouter = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route
					path='/'
					element={<SignList />}
				/>
				<Route
					path='/:sign'
					element={<SignItem />}
				/>
			</Routes>
		</BrowserRouter>
	)
}
