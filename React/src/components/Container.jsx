
const Container = ({ children, title='Default Title' }) => {
  return (
    <div style={{ margin: "5rem", backgroundColor: "white", boder: "1px solid red" }}>
      <h1>{title}</h1>
      {children}
    </div>
  )
}

export default Container