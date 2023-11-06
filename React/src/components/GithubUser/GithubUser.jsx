import { useEffect } from 'react';
import { useGithubUser } from '../../hooks/useGithubUser';
const GithubUser = ({ username }) => {

  const { userData, fetchGithubUser } = useGithubUser(username);



  useEffect(() => {
    fetchGithubUser();
  }, [username])


  return (
    <div>
      <h1>Name: {userData.name}</h1>
      <h1>Username: {userData.login}</h1>
      <h1>Avatar: <img src={userData.avatar} style={{ maxWidth: '150px' }} alt="" /></h1>
    </div>);
};
export default GithubUser;
