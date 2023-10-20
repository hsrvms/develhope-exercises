function Age({ age }) {
	return (
		<>
			<p>Your age is {age}!</p>
		</>
	);
}

export default function Welcome({ name = "Orlando", age}) {

  const isValidAge = age > 18 && age < 65 && name === 'John';
	
// Question : Modify the Welcome component so that the Age component is rendered only if the age prop is greater than 18 and less than 65 and the name prop is equal to "John". 
// Your rejection note : "please, write 1 component per file, Age component should be rendered outside p tag. If you have a variable named isValidAge, it should control only age value, not name value"
	
// If you don't want me to validate name then you should don't ask me to validate the name in the task. I know you spend a lot of time to for this exercises but I spend lots of time to create new branch, push it to repo, confirm PR and merge. 
// The task takes 2 minutes to solve but opening new branch for every simple task and pushing them take too much time and I can't use my time effectively. I want to learn something new and useful, but I'm spending so much time to do this kind of tasks.
// I want to find a job as soon as possible and it can be happen by learning much more things. I'm trying my best to learn everything about full-stack web development. But this exercises process makes me slower. 
// Also, if you had wanted me to open a new file for each component, you should have informed me about this in the exercise explanation. 
// Please stop rejecting all my exercises just because I didn't open a new file for each component. I know that this is not a best practice but I try to make exercises little easier and I want to spend more time for my other projects that I planned to add to my CV;
// I will open a new file for each component after now, but I cant correct my all exercises that I already sent. Sorry, I have participated Develhope to be a good developer and find a good job. That's why I will use my time more effective way and make more projects for my portfolio and CV.
 	
	
	return (
		<>
			<p>
				Welcome, <strong>{name}!</strong>
				{isValidAge && <Age age={age} />}
			</p>
		</>
	);
}
