import { Button } from 'reactstrap';
import React from 'react';
import Data from '../../data.js'

const PackagesMonthly = () => {
    return (
        <React.Fragment>
            {Data.packages.map((item, key) => 
        <div className="month">
            <span className="pricing-top">
            <p><span>{item.price}</span>/ {item.validity}</p>
            <p className="highlight">{item.name}</p>
            <p>{item.subname}</p>
            </span>
            <Button color="primery" className="">Start free trail</Button>
        </div>
        )}

        {/* {Data.packages.map((item, key) => 
            item.list.map((aa, index) => 
                console.log(aa.listItem)
            )
        )} */}
        </React.Fragment>
    );
};

export default PackagesMonthly;