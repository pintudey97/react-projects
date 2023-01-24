import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/fontawesome-free-solid";
import { useCart } from "react-use-cart";
import { Link } from "react-router-dom";
import { toast } from 'react-toastify';




const ProductList = (props) => {
  const { addItem } = useCart();
  const notify = () => toast("Your item added in cart");
    return (
        <React.Fragment>
            {/* {data.product.map((item,key)=> */}
            <div className="col-sm-6 col-lg-4" key={props.key}>
              <div className="box">
              <div className="img-box">
                <img src={props.url} alt="Product" />
              </div>
              <div className="detail-box">
                <div className="text mb-3">
                  <Link to="#" className="p_name">{props.name}</Link>
                </div>
                <div className="d-flex justify-content-between">
                  <h5><span>$</span> {props.price}</h5>
                  <div className="like">
                  <h6>Rating</h6>
                  <div className="star_container">
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                  </div>
                </div>
                </div>
                
                <div className="btn-box" onClick={notify}>
                    <button to="/products" className="button" onClick={()=> addItem(props.item)} >Add Cart</button>
                  </div>
                </div>
              </div>
            </div>
            {/* )} */}
            
        </React.Fragment>
    );
}
 
export default ProductList;