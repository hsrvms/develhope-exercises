function Age({ age }) {
	return (
		<>
			<p>Your age is {age}!</p>
		</>
	);
}

export default function Welcome({ name = "Orlando", age = 23 }) {
	return (
		<>
			<p>
				Welcome, <strong>{name}!</strong>
			</p>
				{age > 18 && <Age age={age} />}
		</>
	);
}
