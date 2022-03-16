import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd"
import { useState } from "react";

const Content = ({todos,setTodos,addTodo,completed,deleted}) => {

	const [dragIndex,setDragIndex] = useState();

	const handleOnDragEnd = (result) => {
		if (!result.destination) return;
		const items = Array.from(todos);
		const [reorderedItem] = items.splice(result.source.index, 1);
		items.splice(result.destination.index, 0, reorderedItem);
		
		setTodos(items);
		setDragIndex();
	}

	const handleOnDragStart = (result) => {
		setDragIndex(result.source.index);
	}

	return (
		<>
			<div className="todo__add-item">
				<span className="todo__circle"></span>
				<input onKeyUp={addTodo} type="text" className="todo__input" placeholder="Create a new todo..."/>
			</div>
			<DragDropContext onDragStart={handleOnDragStart} onDragEnd={handleOnDragEnd}>
				<Droppable droppableId="todo__list">
					{(provided)=>(
						<ul className="todo__list" {...provided.droppableProps} ref={provided.innerRef}>
							{todos.map((todo,index)=> (
								<Draggable key={todo.id.toString()} draggableId={todo.id.toString()} index={index}>
									{(provided) => (
										<li className={`todo__item ${todo.completed ? 'todo__item--completed' : ''} ${dragIndex===index ? 'todo__item--drag' : ''}`} ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
											<span className="todo__circle" onClick={()=>completed(todo.id)}></span>
											<span className="todo__text" onClick={()=>completed(todo.id)}>{todo.text}</span>
											<img className="todo__close" src="./images/icon-cross.svg" onClick={()=>deleted(todo.id)}/>
										</li>
									)}
								</Draggable>								
							))}
							{provided.placeholder}
						</ul>
					)}
				</Droppable>
			</DragDropContext>
		</>
	)
}

export default Content