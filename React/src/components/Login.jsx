import { useState } from "react";

const Login = () => {
	const [data, setData] = useState({ username: "", password: "" });
	const [inputStyle, setInputStyle] = useState({});

	function handleChange(event) {
		console.log("changed");
		const { name, value } = event.target;
		setData((prevData) => ({ ...prevData, [name]: value }));
		console.log(event.target.style);
		if (name === "password") {
			if (value.length < 8) {
				setInputStyle((prevInputStyle) => ({
					...prevInputStyle,
					backgroundColor: "red",
				}));
			} else {
				setInputStyle((prevInputStyle) => ({
					...prevInputStyle,
					backgroundColor: "green",
				}));
			}
		}
	}

	function handleSubmit(event) {
		event.preventDefault();
    console.log(data)
	}

	return (
		<div>
			<form
				onSubmit={handleSubmit}
				style={{
					marginTop: "2rem",
					border: "1px solid green",
					padding: "1rem",
				}}
			>
				<input
					type="text"
					placeholder="username"
					name="username"
					value={data.username}
					onChange={handleChange}
				/>
				<br />
				<input
					type="password"
					placeholder="password"
					name="password"
					value={data.password}
					onChange={handleChange}
          style={inputStyle}
				/>
				<br />
				<button >LogIn</button>
			</form>
		</div>
	);
};

export default Login;
