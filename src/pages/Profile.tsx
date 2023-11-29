import { useQuery } from '@tanstack/react-query';
import Counter from '../components/Counter';
import baseFetch from '../utils/baseFetch';

const Profile = () => {
  const { isPending, error, data } = useQuery({
    queryKey: ['repoData'],
    queryFn: baseFetch('https://api.github.com/repos/TanStack/query')
  });

  if (isPending) return 'Loading...';

  if (error) return 'An error has occurred: ' + error.message;

  return (
    <div>
      <h1>{data.name}</h1>
      <p>{data.description}</p>
      <strong>👀 {data.subscribers_count}</strong>{' '}
      <strong>✨ {data.stargazers_count}</strong>{' '}
      <strong>🍴 {data.forks_count}</strong>
      <Counter />
    </div>
  );
};

export default Profile;
