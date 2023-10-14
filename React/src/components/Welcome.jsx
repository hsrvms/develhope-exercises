function Age({ age }) {
	return (
		<>
			<p>Your age is {age}!</p>
		</>
	);
}

export default function Welcome({ name = "Orlando", age}) {

  const isValidAge = age > 18 && age < 65 && name === 'John';

	return (
		<>
			<p>
				Welcome, <strong>{name}!</strong>
				{isValidAge && <Age age={age} />}
			</p>
		</>
	);
}
