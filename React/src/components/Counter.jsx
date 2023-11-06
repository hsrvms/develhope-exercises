import { useCounter } from '../hooks/useCounter'


const Counter = () => {

  const { count, increment, decrement, reset } = useCounter(0);

  return (
    <div style={{ display: 'inline', backgroundColor: 'red', padding: '.5rem' }}>
      <h1>{count}</h1>
      <div>
        <button onClick={decrement}>-</button>
        <button onClick={increment}>+</button>
        <button onClick={reset}>Reset</button>
      </div>
    </div>
  )
}

export default Counter

