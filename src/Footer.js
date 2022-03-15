const Footer = ({count,deleteCompleted,filterTodos,filterType}) => {
	return (
		<>
			<div className="todo__footer">
				<div className="todo__state">
					<div className="js-left">{count} items left</div>
					<span className="js-clear" onClick={deleteCompleted}>Clear Completed</span>
				</div>
				<div className="todo__filter">
					<span className={`js-filter-all ${!filterType ? 'todo__filter--active' : ''}`} onClick={()=>filterTodos()}>All</span>
					<span className={`js-filter-active ${filterType==='active' ? 'todo__filter--active' : ''}`} onClick={()=>filterTodos('active')}>Active</span>
					<span className={`js-filter-completed ${filterType==='completed' ? 'todo__filter--active' : ''}`} onClick={()=>filterTodos('completed')}>Completed</span>
				</div>
			</div>
			<div className="todo__help">
				Drag and drop to reorder list
			</div>		
		</>
	)
}

export default Footer