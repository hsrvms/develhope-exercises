import { useState } from 'react'

const Container = ({ children, title='Default Title' }) => {

  const [collapsed, setCollapsed] = useState(false)

  function toggleCollapsed() {
    setCollapsed(!collapsed)
  }

  return (
    <div style={{ margin: "5rem", backgroundColor: "white", boder: "1px solid red" }}>
      <h1 onClick={toggleCollapsed}>{title}</h1>
      {!collapsed && <>{children}</>}
    </div>
  )
}

export default Container