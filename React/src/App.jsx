const App = () => {
  const hello = 'Hello World!';

  function sayHello(name) {
    return `<h1>Hello, ${name}</h1>`
  }

  return <h1>{sayHello('Husrev')}</h1>
}

export default App;