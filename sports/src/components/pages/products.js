import React from "react";
import { Container, Row } from "reactstrap";
import ImagePath from "../../imgPath";
import ProductList from "../common/product-list";
import data from '../../data.js';

const Products = () => {
    return (
        <React.Fragment>
            <img src={ImagePath.innerBanner1} alt="Product Bannr" className="w-100" />
            <section className="product_section layout_padding">
                <Container>
                <div className="heading_container heading_center">
                    <h2>Our Products</h2>
                </div>
                <Row>
                    {data.product.map((item, key)=>
                    <ProductList key={key} url={ImagePath[item.imgUrl]} price={item.price} name={item.name} item={item} />
                    )}
                </Row>
                </Container>
            </section>
        </React.Fragment>
    );
}
 
export default Products;