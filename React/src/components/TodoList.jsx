const TodoList = ({items, inputValue, handleChange, handleReset, handleSubmit, handleDelete}) => {
	return (
		<div>
			<ul>
				{items.length > 0 && items.map((item) => (
          <li key={item}>
            {item}
            <button onClick={handleDelete} data-color={item}>Delete</button>
          </li>
        ))}
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