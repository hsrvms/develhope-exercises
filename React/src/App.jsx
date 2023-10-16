import { useState } from "react";
import "./App.css";

function Login({ formData, onChange, onLogin, onReset }) {
	return (
		<form onSubmit={onLogin}>
			<div>
				<label htmlFor="username">Username:</label>
				<input
					type="text"
					name="username"
					value={formData.username}
					onChange={onChange}
				/>
			</div>
			<div>
				<label htmlFor="password">Password:</label>
				<input
					type="password"
					name="password"
					value={formData.password}
					onChange={onChange}
				/>
			</div>
			<div>
				<label htmlFor="remember">Remember:</label>
				<input
					type="checkbox"
					name="remember"
					checked={formData.remember}
					onChange={onChange}
				/>
			</div>
			<button
				disabled={formData.username === "" || formData.password === ""}
				type="submit"
			>
				Submit
			</button>
			<button onClick={onReset}>Reset</button>
		</form>
	);
}

const App = () => {
	const [formData, setFormData] = useState({
		username: "",
		password: "",
		remember: false,
	});

	function onLogin(e) {
		e.preventDefault();
		console.log("Login Attempt");
	}

	function handleReset() {
		setFormData({
			username: "",
			password: "",
			remember: false,
		});
	}

	function handleChange(e) {
		const { type, name, checked, value } = e.target;
		console.log(type, name, checked);

		setFormData((formData) => {
			return {
				...formData,
				[name]: type === "checkbox" ? checked : value,
			};
		});
	}

	return (
		<div id="app">
			<Login
				formData={formData}
				onChange={handleChange}
				onLogin={onLogin}
				onReset={handleReset}
			/>
		</div>
	);
};

export default App;
