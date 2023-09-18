const user = {
	id: 1,
	name: "John",
	age: 25,
};

localStorage.setItem("user", JSON.stringify(user));

const localData = JSON.parse(localStorage.getItem("user"));

console.log(localData);
