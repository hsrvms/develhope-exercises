import { useState, useEffect } from 'react';

const GithubUser = ({ username }) => {

  const [userData, setUserData] = useState({
    name: '',
    avatar: '',
    login: ''
  });

  const url = 'https://api.github.com/users';

  console.log(userData)

  useEffect(() => {
    async function getData() {
      const res = await fetch(`${url}/${username}`);
      console.log(res.status)
      const data = await res.json();

      setUserData(
        {
          name: data.name,
          avatar: data.avatar_url,
          login: data.login
        }
      )

    }

    getData()

  }, [username])

  return <div>
    <h1>Name: {userData.name}</h1>
    <h1>Username: {userData.login}</h1>
    <h1>Avatar: <img src={userData.avatar} style={{maxWidth: '150px'}} alt="" /></h1>
  </div>;
};
export default GithubUser;
