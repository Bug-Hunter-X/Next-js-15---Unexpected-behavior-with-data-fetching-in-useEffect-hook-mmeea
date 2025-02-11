```javascript
import { useQuery } from '@tanstack/react-query';

async function fetchData() {
  const res = await fetch('/api/data');
  return res.json();
}

export default function About() {
  const { data, isLoading, isError, error } = useQuery(['data'], fetchData);

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Error: {error.message}</p>;

  return (
    <div>
      <h1>About Page</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}
```