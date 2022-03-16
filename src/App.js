import './App.css';
import Header from './Header';
import Content from './Content';
import Footer from './Footer';
import { useState } from "react";
import nextId from "react-id-generator";

function App() {
	const [todos,setTodos] = useState([
		{
			id : 1,
			text : 'Complete Todo App on Frontend Mentor',
			completed : true
		},
		{
			id : 2,
			text : 'Pick up groceries',
			completed : false
		},
		{
			id : 3,
			text : 'Read for 1 hour',
			completed : false
		},
		{
			id : 4,
			text : '10 minutes meditation',
			completed : false
		},
		{
			id : 5,
			text : 'Jog around the park 3x',
			completed : false
		},
		{
			id : 6,
			text : 'Complete online JavaScript course',
			completed : false
		},
	]);

	const [currentTodos,setCurrentTodos] = useState(todos);
	const [filterType,setFilterType] = useState();

	const toggleDarkMode = () => {
		document.body.classList.toggle('theme--light');
	};

	const addTodo = (e) => {
		if(e.key==='Enter') {
			setTodos([{
				id : nextId(),
				text : e.target.value,
				completed : false
			},...todos]);
			setCurrentTodos([{
				id : nextId(),
				text : e.target.value,
				completed : false
			},...todos]);
			e.target.value = "";
		}
	};

	const completed = (id) => {
		const updatedTodos = todos.map(todo=> todo.id===id ? {...todo,completed:!todo.completed} : todo);
		setTodos(updatedTodos);
		setCurrentTodos(updatedTodos);
	};

	const deleted = (id) => {
		const updatedTodos = todos.filter(todo=> todo.id!==id);
		setTodos(updatedTodos);
		setCurrentTodos(updatedTodos);
	};

	const deleteCompleted = () => {
		const updatedTodos = todos.filter(todo=> !todo.completed);
		setTodos(updatedTodos);
		setCurrentTodos(updatedTodos);
		setFilterType();
	};

	const filterTodos = (type) => {
		const filteredTodos = (!type) ? todos
			: (type==='active') ? todos.filter(todo=>!todo.completed) : todos.filter(todo=>todo.completed);
		setCurrentTodos(filteredTodos);
		setFilterType(type);
	}

	return (
		<>
			<Header
				toggleDarkMode={toggleDarkMode}
			/>
			<Content 
				todos={filterType ? currentTodos : todos}
				setTodos={setTodos}
				addTodo={addTodo}
				completed={completed}
				deleted={deleted}
			/>
			<Footer
				count={todos.length}
				deleteCompleted={deleteCompleted}
				filterTodos={filterTodos}
				filterType={filterType}
			/>
		</>
	);
}

export default App;
