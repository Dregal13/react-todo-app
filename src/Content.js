const Content = ({todos,addTodo,completed,deleted}) => {
	return (
		<>
			<div className="todo__add-item">
				<span className="todo__circle"></span>
				<input onKeyUp={addTodo} type="text" className="todo__input" placeholder="Create a new todo..."/>
			</div>
			<ul className="todo__list">
				{todos.map((todo)=> (
					<li className={`todo__item ${todo.completed ? 'todo__item--completed' : ''}`} key={todo.id}>
						<span className="todo__circle" onClick={()=>completed(todo.id)}></span>
						<span className="todo__text" onClick={()=>completed(todo.id)}>{todo.text}</span>
						<img className="todo__close" src="./images/icon-cross.svg" onClick={()=>deleted(todo.id)}/>
					</li>					
				))}
			</ul>		
		</>
	)
}

export default Content