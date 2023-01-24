import React, { useEffect, useState } from 'react';
import axios from 'axios';
const Apitest = () =>{
    const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);
  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/photos")
      .then(
        (result) => {
          setIsLoaded(true);
          setItems(result.data);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      )
  }, [])
  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
return(
    <React.Fragment>
<ul>
        {items.map(item => (
          <li key={item.name}>
            {item.title} 
            <img src={item.url} alt="www" />
            {items.id}
          </li>
        ))}
      </ul>
    </React.Fragment>
);
}
}
export default Apitest;