const Content = () => {
  return (
	<>
		<div className="todo__add-item">
			<span className="todo__circle"></span>
			<input type="text" className="todo__input" placeholder="Create a new todo..."/>
		</div>
		<ul className="todo__list">
			<li class="todo__item todo__item--completed">
				<span class="todo__circle"></span>
				<span class="todo__text">Complete online JavaScript course</span>
				<img class="todo__close" src="./images/icon-cross.svg" />
			</li>
			<li class="todo__item">
				<span class="todo__circle"></span>
				<span class="todo__text">Jog around the park 3x</span>
				<img class="todo__close" src="./images/icon-cross.svg" />
			</li>
			<li class="todo__item">
				<span class="todo__circle"></span>
				<span class="todo__text">10 minutes meditation</span>
				<img class="todo__close" src="./images/icon-cross.svg" />
			</li>
			<li class="todo__item">
				<span class="todo__circle"></span>
				<span class="todo__text">Read for 1 hour</span>
				<img class="todo__close" src="./images/icon-cross.svg" />
			</li>
			<li class="todo__item">
				<span class="todo__circle"></span>
				<span class="todo__text">Pick up groceries</span>
				<img class="todo__close" src="./images/icon-cross.svg" />
			</li>
			<li class="todo__item">
				<span class="todo__circle"></span>
				<span class="todo__text">Complete Todo App on Frontend Mentor</span>
				<img class="todo__close" src="./images/icon-cross.svg" />
			</li>
		</ul>		
	</>
  )
}

export default Content