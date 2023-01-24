import React from "react";
import { Link } from "react-router-dom";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faTruckMoving, faUndo, faHeadphones } from '@fortawesome/fontawesome-free-solid';
import ProductList from "../common/product-list.js";
import ImagePath from '../../imgPath.js';
import data from '../../data.js';
import { Col, Container, Row } from "reactstrap";

const Home = () => {
  return (
    <React.Fragment>
      {/* Banner  */}
      <section className="slider_section position-relative">
        <Container fluid={true} className="h-100">
          <Row>
            <Col md={5} xl={4} className="offset-xl-1 ">
              <div className="detail-box">
                <h1>
                  Sports and <br />
                  Fitness Store
                </h1>
                <p>
                  There are many variations of passages of Lorem Ipsum available.
                </p>
                <div className="btn-box">
                  <Link to="#" className="btn-1">
                    Shop Now
                  </Link>
                  <Link to="#" className="btn-2">
                    Get A Quote
                  </Link>
                </div>
              </div>
            </Col>
            <Col md={7} className="px-0 h-100">
              <div className="img_container h-100">
                <div id="carouselExampleIndicators" className="carousel slide carousel-fade" data-ride="carousel">
                  <div className="carousel-inner">
                    <div className="carousel-item active">
                      <div className="img-box">
                        <img src={ImagePath.sliderImg} alt="" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      {/* End Banner  */}
      {/* Feature Section  */}

      <section className="feature_section  layout_padding">
        <Container>
          <div className="feature_container">
            {data.feature.map((item, key)=>
              <div className="box">
                <div className="img-box">
                  <i className={`fas fa-${item.icon}`}></i>
                </div>
                <div className="detail-box">
                  <h5>{item.title}</h5>
                  <p>{item.dep}</p>
                </div>
              </div>
            )}
            {/* <div className="box">
              <div className="img-box">
                <FontAwesomeIcon icon={faTruckMoving} />
              </div>
              <div className="detail-box">
                <h5>Fast Delivery</h5>
                <p>It is a long established fact that a reader will be distracted by</p>
              </div>
            </div> */}
            {/* <div className="box">
              <div className="img-box">
                <FontAwesomeIcon icon={faUndo} />
              </div>
              <div className="detail-box">
                <h5>
                  Easy Return
                </h5>
                <p>
                  It is a long established fact that a reader will be distracted by
                </p>
              </div>
            </div>
            <div className="box">
              <div className="img-box">
                <FontAwesomeIcon icon={faHeadphones} />
              </div>
              <div className="detail-box">
                <h5>
                  support24/7
                </h5>
                <p>
                  It is a long established fact that a reader will be distracted by
                </p>
              </div>
            </div> */}
          </div>
        </Container>
      </section>
      {/* End Feature Section  */}

      {/* About  */}
      <section className="about_section">
        <Container fluid={true}>
          <Row>
            <Col lg={4} md={5} className="offset-md-1">
              <div className="detail-box">
                <h2>
                  About Us
                </h2>
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus hic, dolore error nulla similique cum minima rem, distinctio animi architecto inventore temporibus consequuntur quibusdam modi atque est fuga dicta quae!
                </p>
                <div>
                  <Link to="#">
                    Buy Now
                  </Link>
                </div>
              </div>
            </Col>
            <Col md={5} lg={7}>
              <div className="img-box">
                <img src={ImagePath.aboutImg} alt="about" />
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      {/* End About  */}



      <section className="product_section layout_padding">
        <Container>
          <div className="heading_container heading_center">
            <h2>
              Our Products
            </h2>
          </div>
          <Row>
            {data.product.slice(0, 3).map((item, key) =>
              <ProductList key={key} url={ImagePath[item.imgUrl]} price={item.price} name={item.name} item={item} />
            )}
                        
          </Row>
          <div className="btn-box">
            <Link to="/products">View All</Link>
          </div>
        </Container>
      </section>


    </React.Fragment>
  );
}

export default Home;