import { useState } from "react";
import "./App.css";

function Login() {
	const [data, setData] = useState({
		username: "",
		password: "",
		remember: "",
	});

	function handleSubmit(e) {
		e.preventDefault();

		const formData = new FormData(e.target)

		const displayData = {
			username: formData.get('username'),
			password: formData.get('password'),
			remember: formData.get('remember') === 'on' ? true : false,
		}

		console.log(displayData, formData.get('remember'));

		setData({
			username: "",
			password: "",
			remember: "",
		});
	}

	function handleReset() {
		setData({
			username: "",
			password: "",
			remember: "",
		});
	}

	function handleChange(e) {
		const { name, value, type, checked } = e.target;
		console.log(name);

		setData({
			...data,
			[name]: type === "checkbox" ? checked : value,
		});
	}


	return (
		<form onSubmit={handleSubmit}>
			<div>
				<label htmlFor="username">Username:</label>
				<input
					type="text"
					name="username"
					value={data.username}
					onChange={handleChange}
				/>
			</div>
			<div>
				<label htmlFor="password">Password:</label>
				<input
					type="password"
					name="password"
					value={data.password}
					onChange={handleChange}
				/>
			</div>
			<div>
				<label htmlFor="remember">Remember:</label>
				<input
					type="checkbox"
					name="remember"
					checked={data.remember}
					onChange={handleChange}
				/>
			</div>
			<button
				disabled={data.username === "" || data.password === ""}
				type="submit"
			>
				Submit
			</button>
			<button onClick={handleReset}>Reset</button>
		</form>
	);
}

const App = () => {
	return (
		<div id="app">
			<Login />
		</div>
	);
};

export default App;
