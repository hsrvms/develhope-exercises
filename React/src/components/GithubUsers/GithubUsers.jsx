import { useEffect, useState } from 'react';
import { useNavigate, Outlet } from 'react-router-dom';

const GithubUsers = () => {

  const [users, setUsers] = useState([]);
  const navigate = useNavigate();

  const url = 'https://api.github.com/users'
  console.log(users)

  useEffect(() => {
    async function getAllUsers() {
      const res = await fetch(url);
      const data = await res.json();
      setUsers(data);
    }

    getAllUsers();

  }, [])

  const selectUser = (username) => {
    navigate('/users/'+username);
  }

  const listStyles = {
    display: 'flex',
    flexWrap: 'wrap',
  }

  return (
    <div>
      <ul style={listStyles}>
        {users.map((user) => (
          <li key={user.id}>
            <button style={{ backgroundColor: 'black', width: '150px' }}
              onClick={() => selectUser(user.login)}
            >{user.login}</button>
          </li>
        ))}
      </ul>
      <Outlet/>
    </div>
  );
};
export default GithubUsers;
