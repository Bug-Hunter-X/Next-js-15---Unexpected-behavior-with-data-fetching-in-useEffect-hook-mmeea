```javascript
// pages/index.js
import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <h1>Welcome to my Next.js app!</h1>
      <Link href="/about">
        <a>Go to About Page</a>
      </Link>
    </div>
  );
}
```
```javascript
// pages/about.js
import {useEffect, useState} from 'react';

export default function About() {
  const [data, setData] = useState(null);
  useEffect(() => {
    async function fetchData(){
      const res = await fetch('/api/data');
      const json = await res.json();
      setData(json);
    }
    fetchData();
  }, []);
  if(!data) return <p>Loading...</p>;
  return (
    <div>
      <h1>About Page</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}
```
```javascript
// pages/api/data.js
function handler(req, res) {
  // Simulate an asynchronous operation
  const myData = {
    message: 'This is some data from the API',
  };
  setTimeout(() => {
    res.status(200).json(myData);
  }, 2000); // Simulate a 2-second delay
}
export default handler;
```