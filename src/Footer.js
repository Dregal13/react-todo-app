const Footer = () => {
  return (
	<>
		<div class="todo__footer">
			<div class="todo__state">
				<div class="js-left"></div>
				<span class="js-clear">Clear Completed</span>
			</div>
			<div class="todo__filter">
				<span class="js-filter-all todo__filter--active">All</span>
				<span class="js-filter-active">Active</span>
				<span class="js-filter-completed">Completed</span>
			</div>
		</div>
		<div class="todo__help">
			Drag and drop to reorder list
		</div>		
	</>
  )
}

export default Footer