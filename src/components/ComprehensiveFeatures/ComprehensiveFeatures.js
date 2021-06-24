import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './ComprehensiveFeatures.css'
import { BsFillReplyAllFill } from 'react-icons/bs';
import { FcCheckmark } from "react-icons/fc";
import { Link } from 'react-router-dom';

const ComprehensiveFeatures = () => {
    const [comprehensiveFeatures, SetComprehensiveFeatures] = useState([])
    
    async function asyncComprehensiveFeatures() {
        try {
            const response = await axios.get("https://server-agency.herokuapp.com/services");
            const data = await response.data
            SetComprehensiveFeatures(data)
          } catch (error) {
            alert(error);
          }
      }
      useEffect(()=>{
        asyncComprehensiveFeatures();
      },[])
    return (
        <section className='py-4'>
        <Container>
            <Row>
                <Col md={8} sm={12}>
                <div className="features-service-section">
                        <div className="row">
                            {
                                comprehensiveFeatures.slice(0,4).map((service, index) => (
                                    <div key={index} className="col-md-6">
                                        <div className="features-single-service text-center">
                                            <span>
                                                <img height='80px' src={service.icon} alt="" />
                                            </span>
                                            <h3>{service.title}</h3>
                                            <p>{service.description}</p>
                                            <Link to={`/getService/${service._id}`} className='text-decoration-none' ><strong className='get-btn'> Get Service <BsFillReplyAllFill/></strong></Link> 
                                        </div>
                                    </div>
                                ))
                            }
                    </div>
                </div>
                </Col>
                <Col md={4} sm={12}>
                    <div style={{fontFamily: 'Poppins, sans-serif' }}>
                        <h1 className='fw-bolder' style={{color:'#000'}}>
                         Comprehensive Features
                        </h1>
                        <hr style={{width:'150px', color:'#2A7AF3', border:'1px solid'}}/>
                        <p style={{color:'grey', textAlign:'justify'}}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe aspernatur adipisci minus assumenda omnis, possimus beatae aliquam explicabo, recusandae veritatis earum repellendus, impedit.</p>
                        <ul className='list-unstyled'>
                            <li> <FcCheckmark/> Donec facilisis velit eu est phasellus consequat</li>
                            <li> <FcCheckmark/>  Donec facilisis velit eu est phasellus consequat</li>
                            <li> <FcCheckmark/>  Donec facilisis velit eu est phasellus consequat</li>
                            <li> <FcCheckmark/>  Donec facilisis velit eu est phasellus consequat</li>
                            <li> <FcCheckmark/>  Donec facilisis velit eu est phasellus consequat</li>
                        </ul>
                        <button className='btn btn-success'>Read More</button>
                    </div>
                </Col>
            </Row>
        </Container>
        
    </section>
    );
};

export default ComprehensiveFeatures;