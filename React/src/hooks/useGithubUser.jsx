import { useState } from 'react';

export const useGithubUser = (username) => {
  const [userData, setUserData] = useState({
    name: '',
    avatar: '',
    login: ''
  });

  const url = 'https://api.github.com/users';

  async function fetchGithubUser() {

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

  return {
    userData, 
    fetchGithubUser
  }
}
