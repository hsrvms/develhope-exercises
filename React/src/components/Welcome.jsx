export default function Welcome({ name = "Orlando", age = 23 }) {
	return (
		<>
			<p>Welcome, <strong>{name}!</strong></p>
			<p>Your age is {age}!</p>
		</>
	);
}
