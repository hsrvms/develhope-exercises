import { useParams } from 'react-router-dom';
import { useGithubUser } from '../../hooks/useGithubUser';
const GithubUser = () => {

  const { username } = useParams()
  const { userData, loading, error } = useGithubUser(username);

  return (
    <div>
      {loading && <h1>...Loading...</h1>}
      {error && <h1>{error}</h1>}
      {userData && (
        <>
          <h1>Name: {userData.name}</h1>
          <h1>Username: {userData.login}</h1>
          <h1>Avatar: <img src={userData.avatar_url} style={{ maxWidth: '150px' }} alt="" /></h1>
        </>
      )}
    </div>);
};
export default GithubUser;
