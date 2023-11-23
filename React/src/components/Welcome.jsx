

export default function Welcome({ name = "Orlando", age}) {
	return (
		<>
			<p>
				Welcome, <strong>{name}!</strong>
			</p>
				{age > 18 && <Age age={age} />}
		</>
	);

}

export default Welcome