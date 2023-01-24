import React, { useEffect, useState } from "react";
import axios from "axios";
import { Container, Col, Row } from "react-bootstrap";
import ProfileLeftSide from "../common/profile-left-side";
import ProfileTop from "../common/profile-top";

const Profile = () => {
  const [profiledata, setProfiledata] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const [isError, setIsError] = useState(null);
  const [errormsg, setErrormsg] = useState('');
  const profileApiURL = 'https://dummyjson.com/users/1';
  const getData = async () =>{
      await axios.get(profileApiURL)
      .then(function (response) {
        setIsLoaded(true);
        setProfiledata(response.data);
      })
      .catch(function (error) {
        setIsError(true);
        setErrormsg(`message: ${error.message} code: ${error.code}`);
      })
  }
  useEffect(()=>{
    getData();
  },[0]);
  
  const username = profiledata.firstName + " " + profiledata.lastName
  localStorage.setItem('user-details', JSON.stringify(
    {'userimg': profiledata.image,
    'username': username,}
  ))

    return (
        <React.Fragment>
          <ProfileTop  />
      
   
    <section className="section-padding">
        <Container fluid>
          <Row>
            <ProfileLeftSide />
            <div className="col-xs-12 col-sm-12 col-md-9 col-lg-9 col-xl-9">
              <form method="" action="" id="" className="">
              <div className="my-profile-process">
              <Row>
                <Col xs={12} sm={12} md={12} lg={12} xl={12}>
                  <label className="dashboard-heading white-color mbottom-20">Account Information</label>
                  
                  {
                    (() => {
                    if (isError === true)
                        return <div>{errormsg}</div>
                    if (!isLoaded === true)
                        return <div>Loading...</div>
                    else
                        return (
                            <Row>
                              <Col xs={12} sm={12} md={6} lg={4} xl={4}>
                               <div className="form-group">
                                     <p><strong>Name:</strong> {profiledata.firstName} {profiledata.lastName}</p>
                                     <p><strong>Email:</strong> {profiledata.email}</p>
                                     <p><strong>User Name:</strong> {profiledata.username}</p>
                                   </div>
                                 </Col>
                                 <Col xs={12} sm={12} md={6} lg={4} xl={4}>
                                   <div className="form-group">
                                     <p><strong>Phone:</strong> {profiledata.phone}</p>
                                     <p><strong>Gender:</strong> {profiledata.gender}</p>
                                     <p><strong>DOB:</strong> {profiledata.birthDate}</p>
                                   </div>
                                 </Col>
                                 <Col xs={12} sm={12} md={6} lg={4} xl={4}>
                                   <div className="form-group">
                                     <p><strong>Gender:</strong> {profiledata.gender}</p>
                                     <p><strong>Age:</strong> {profiledata.age}</p>
                                     <p><strong>Address:</strong> {profiledata.address.address} - {profiledata.address.city}</p>
                                   </div>
                                 </Col>
                               </Row>
                              )
                      })()
                    }
                </Col>
              </Row>
            </div>
            <div className="my-profile-process">
              <Row>
                <Col xs={12} sm={12} md={12} lg={12} xl={12}>
                  <label className="dashboard-heading white-color mbottom-20">Card Details</label>
                  {
                    (() => {
                    if (isError === true)
                        return <div>{errormsg}</div>
                    if (!isLoaded === true)
                        return <div>Loading...</div>
                    else
                        return (
                          <Row>
                              <Col xs={12} sm={12} md={6} lg={4} xl={4}>
                               <div className="form-group">
                                  <p><strong>Card Number:</strong> {profiledata.bank.cardNumber}</p>
                                  <p><strong>Card Expire:</strong> {profiledata.bank.cardExpire}</p>
                                </div>
                              </Col>
                              <Col xs={12} sm={12} md={6} lg={4} xl={4}>
                               <div className="form-group">
                                  <p><strong>Card Type:</strong> {profiledata.bank.cardType}</p>
                                  <p><strong>Card Currency:</strong> {profiledata.bank.currency}</p>
                                </div>
                              </Col>
                          </Row>
                        )
                    })()}
                </Col>
              </Row>
            </div>
            <div className="my-profile-process">
              <Row>
                <Col xs={12} sm={12} md={6} lg={6} xl={6}>
                  <label className="dashboard-heading white-color mbottom-20">Plan Details</label>   
                  <h2 className="hide p">Yearly Pro Plan</h2>  
                  <p className="hide pb-2 pt-2">Valid till 05th May, 2022</p>         
                  <p className="pb-24 m-0 none">No Plan has been selected</p>
                  <ul>
                    <li className="choose-plan-button"><button type="button" className="primary-button plans">Choose Plan</button></li>
                  </ul>              
                </Col>
              </Row>  
            </div>        
            </form>
            </div>
          </Row>
        </Container>
      </section>
        </React.Fragment>
    );
}
 
export default Profile;