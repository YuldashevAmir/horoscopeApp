import './Header.module.scss'

export const Header = ({ language, handleLanguageChange }) => {
	return (
		<header>
			<h1>Name</h1>
			<select onChange={handleLanguageChange} value={language}>
				<option value='translated'>En</option>
				<option value='original'>Ru</option>
			</select>
		</header>
	)
}
