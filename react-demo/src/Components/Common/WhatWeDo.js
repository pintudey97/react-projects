import React from 'react';
import { Col } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAlignCenter } from '@fortawesome/free-solid-svg-icons';
const Whatwedo = (props) => {
 return(
     <React.Fragment>
        <Col xs={12} sm={6} md={6} lg={4} xl={4} className="d-flex flex-collumn">
            <div className="tiles">
                <img src={props.img} />
                <h2>{props.title}</h2>
                <p>{props.text}</p>
                <button>{props.buttonname}</button>
            </div>
        </Col>
     </React.Fragment>
 )
}
export default Whatwedo;