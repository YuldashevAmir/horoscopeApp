
export const Header = ({ language, handleLanguageChange }) => {
	const tg = window.Telegram.WebApp
	return (
		<header >
			<h1>{tg.initDataUnsafe?.user?.username}</h1>
			<select onChange={handleLanguageChange} value={language}>
				<option value='translated'>En</option>
				<option value='original'>Ru</option>
			</select>
		</header>
	)
}
