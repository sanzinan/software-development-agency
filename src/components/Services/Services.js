import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import axios from 'axios';
import { BsFillReplyAllFill } from "react-icons/bs";
import './Services.css'
import { useEffect, useState  } from 'react';
import { Link } from 'react-router-dom';

const Services = () => {
    const [services, SetServices] = useState([])
    
    async function asyncServicesData() {
        try {
            const response = await axios.get("https://server-agency.herokuapp.com/services");
            const data = await response.data
            SetServices(data)
          } catch (error) {
            alert(error);
          }
      }
      useEffect(()=>{
        asyncServicesData();
      },[])
    return (
        <section className='py-5'>
            <div className="image">
                            <img height='500px' src="https://i.ibb.co/pvCv1YJ/special-feat.png" alt="" />
                        </div>
            <Container>
                <Row>
                <Col md={4} sm={12}>
                        <div style={{fontFamily: 'Poppins, sans-serif' }}>
                            <h1 className='fw-bolder' style={{color:'#3D486F'}}>
                                Our Best Services
                            </h1>
                            <hr style={{width:'150px', color:'#2A7AF3', border:'1px solid'}}/>
                            <p style={{color:'grey', textAlign:'justify'}}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe aspernatur adipisci minus assumenda omnis, possimus beatae aliquam explicabo, recusandae veritatis earum repellendus, impedit.</p>
                            <button className='btn btn-success'>Read More</button>
                        </div>
                    </Col>
                    <Col md={8} sm={12}>
                    <div className="service-section">
                            <div className="row">
                                {
                                    services.slice(4, services.length).map((service, index) => (
                                        <div key={index} className="col-md-6">
                                            <div className="single-service text-center">
                                                <span>
                                                    <img height='80px' src={service.icon} alt=".." />
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
                </Row>
              
            </Container>
            
        </section>
    );
};

export default Services;