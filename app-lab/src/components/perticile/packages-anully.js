import { Button } from 'reactstrap';
import React from 'react';

const PackagesAnully = () => {
    return (
        <React.Fragment>
        <div className="month">
            <span className="pricing-top">
            <p><span>$0</span>/ Year</p>
            <p className="highlight">Business Class</p>
            <p>For small teams or office</p>
            </span>
            <p>Drag & Drop Builder</p>
            <p> 1,000's of Templates</p>
            <p> Blog Support Tools</p>
            <p> eCommerce Store </p>
            <Button color="primery" className="">Start free trail</Button>
        </div>
        </React.Fragment>
    );
};

export default PackagesAnully;