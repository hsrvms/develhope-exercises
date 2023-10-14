function Age({ age }) {
	return (
		<>
			{age > 18 ? <p>Your age is {age}!</p> : <p>You are very young!</p>}
		</>
	);
}

export default function Welcome({ name = "Orlando", age}) {

	return (
		<>
			<p>
				Welcome, <strong>{name}!</strong>
				<Age age={age} />
			</p>
		</>
	);
}
