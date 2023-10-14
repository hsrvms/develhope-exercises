function Age({ age }) {
	return (
		<>
			<p>Your age is {age}!</p>
		</>
	);
}

export default function Welcome({ name = "Orlando", age}) {
	return (
		<>
			<p>
				Welcome, <strong>{name}!</strong>
				{age && <Age age={age} />}
			</p>
		</>
	);
}
