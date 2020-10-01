import React, {useEffect, useState} from 'react';
const API_URL = process.env.REACT_APP_API;

function App() {
  const [data, setData] = useState([]);
  
  useEffect(() => {
    async function getData() {
      const url = `${API_URL}/kittens`;
      const response = await fetch(url);
      const data = await response.json();
      setData(data);
    }
    getData();
  }, []); 

  return (
    <>
      <h1>Kitten App!</h1>
      <p>Data from server:</p> 
      {data.map(kitten => {
        return <p key={kitten._id}>{kitten.name} ({kitten._id})</p>;
      })}
    </>
  );
}

export default App;
