const Header = ({toggleDarkMode}) => {
	return (
		<div className="todo__header">
			<h2 className="todo__title">TODO</h2>
			<img className="todo__icon-theme" src="./images/icon-sun.svg" onClick={toggleDarkMode}/>
		</div>
	)
}

export default Header