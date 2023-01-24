import React, { useEffect, useState } from 'react';
import axios from 'axios';
//import Pagination from "react-js-pagination";
const Service = () =>{
    const [error, setError] = useState(null);
  const [bappa, setBappa] = useState([]);

  useEffect(() => {
    axios
    .get("https://jsonplaceholder.typicode.com/photos")
      .then(
        (res) => {
            console.log(res, "aa");
            setBappa(res.data);
        },
        (error) => {
            setError(error);
        }
      )
  }, [])

  if (error) {
    return <div>Error: API data not respond!!</div>;
  }else {
    return (
        <React.Fragment>
        <ul className="d-flex flex-wrap apisection">
          {bappa.map(bappa => (
            <li key={bappa.name} className="text-center">
              <p>{bappa.id}</p>
                <span><img src={bappa.url} alt="api logo" width="150" height="150" /></span>
                <p>{bappa.title}</p>
            </li>
          ))}
          {/* <Pagination
          activePage={this.state.activePage}
          itemsCountPerPage={10}
          totalItemsCount={450}
          pageRangeDisplayed={5}
          onChange={this.handlePageChange.bind(this)}
        /> */}
        </ul>
        </React.Fragment>
      );
  }
}

export default Service;