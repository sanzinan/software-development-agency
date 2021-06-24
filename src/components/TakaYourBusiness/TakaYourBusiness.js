import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

const TakaYourBusiness = () => {
    return (
        <section className='py-5'>
            <Container className='py-3'>
                <Row>
                    <Col md={6} sm={12} >
                         <div className="img">
                                <img width='100%' height='100%' src="https://i.ibb.co/qn4V1kG/about3.png" alt="" />
                         </div>
                    </Col>
                    <Col md={6} sm={12} className='my-auto'>
                        <div style={{fontFamily: 'Poppins, sans-serif' }}>
                            <h1 className='fw-bolder' style={{color:'#3D486F'}}>
                            Take your business directly <br />
                            to the next level
                            </h1>
                            <hr style={{width:'150px', color:'#2A7AF3', border:'1px solid'}}/>
                            <p style={{color:'grey',textAlign:'justify'}}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe aspernatur adipisci minus assumenda omnis, possimus beatae aliquam explicabo, recusandae veritatis earum repellendus, impedit.</p>
                            <button className='btn btn-success'>Read More</button>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default TakaYourBusiness;