const tg = window.Telegram.WebApp
export const Header = ({ language, handleLanguageChange }) => {
	
	return (
		<header >
			<h1>{tg.initDataUnsafe?.user}</h1>
			<select onChange={handleLanguageChange} value={language}>
				<option value='translated'>En</option>
				<option value='original'>Ru</option>
			</select>
		</header>
	)
}
