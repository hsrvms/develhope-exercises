import { useEffect, useState } from 'react';

const GithubUsers = ({ handleSelectUser }) => {

  const [users, setUsers] = useState([]);

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

  const listStyles = {
    display: 'flex',
    flexWrap: 'wrap',
  }

  return <div>
    <ul style={listStyles}>
      {users.map((user) => (
        <li key={user.id}>
          <button style={{ backgroundColor: 'black', width: '150px'}}
            onClick={() => handleSelectUser(user.login)}
          >{user.login}</button>
        </li>
      ))}
    </ul>
  </div>;
};
export default GithubUsers;
