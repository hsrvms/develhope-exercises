const TodoList = ({items, inputValue, handleChange, handleReset, handleSubmit}) => {
	return (
		<div>
			<ul>
				{items.map((item) => <li key={item}>{item}</li>)}
			</ul>
			<form onSubmit={handleSubmit}>
				<input type="text" value={inputValue} onChange={handleChange}/>
				<button type="submit">Add</button>
        <button onClick={handleReset}>Reset List</button>
			</form>
		</div>
	);
}

export default TodoList