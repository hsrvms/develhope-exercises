

export default function Welcome({ name = "Orlando", age}) {
	return (
		<>
			<p>
				Welcome, <strong>{name}!</strong>
			</p>
				{age && <Age age={age} />}
		</>
	);

}

export default Welcome