import { useState } from "react";
import "./App.css";

function Login({ formData, onChange, onLogin }) {
	return (
		<div>
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
					checked={formData.checked}
					onChange={onChange}
				/>
			</div>
			<button disabled={formData.username === '' || formData.password === ''} onClick={onLogin}>Submit</button>
		</div>
	);
}

const App = () => {
	const [formData, setFormData] = useState({
		username: "",
		password: "",
		remember: false,
	});

	function onLogin() {
		console.log('Login Attempt')
	}

	function handleChange(e) {
		const { type, name, checked, value } = e.target;
		console.log(type, name, checked);

		setFormData((formData) => {
			if (type === "checkbox") {
				return {
					...formData,
					[name]: checked,
				};
			} else {
				return {
					...formData,
					[name]: value,
				};
			}
		});
	}

	return (
		<div id="app">
			<Login formData={formData} onChange={handleChange} onLogin={onLogin}/>
		</div>
	);
};

export default App;
