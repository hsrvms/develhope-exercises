import { useState, useEffect } from 'react';

export const useGithubUser = (username) => {
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);


  async function fetchGithubUser() {
    setLoading(true);
    setError(null);
    const url = 'https://api.github.com/users';

    try {
      const res = await fetch(`${url}/${username}`);
      console.log(res.status)
      const data = await res.json();
      setUserData(data)
      setLoading(false)
    } catch (error) {
      setError(error)
      setUserData(null);
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchGithubUser();
  }, [username])

  return {
    userData,
    loading,
    error,
  }
}
