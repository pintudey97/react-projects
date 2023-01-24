import React from 'react';
const InnerBanner = (props) =>{
    return(
        <React.Fragment>
        <section className="page-baner d-flex align-items-center justify-content-center">
                <img src={props.bannerimg} alt="About Banner" className="img-fluid"/>
                <div className="page-content">
                <h1>{props.pagename}</h1>
                <p>{props.pagetext}</p>
                </div>
            </section>
        </React.Fragment>
    )
}

export default InnerBanner; 