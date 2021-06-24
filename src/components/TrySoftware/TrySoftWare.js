import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './TrySoftWare.css'

const TrySoftWare = () => {
    return (
        <section className='py-5 overflow-hidden'>
            <Container>
                <Row style={{background: 'linear-gradient(45deg, #8089ff 0%, #54ceff 100%)', borderRadius:'15px'}}>
                    <Col md={6} sm={12} className='my-auto'>
                        <div style={{fontFamily: 'Poppins, sans-serif' ,color:'#FFF'}}>
                            <p >Get the Software</p>
                            <h1 className='fw-bolder'>
                              Try Our Software
                            </h1>
                            <hr style={{width:'150px', border:'1px solid RED'}}/>
                            <p style={{textAlign:'justify'}}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe aspernatur adipisci minus assumenda omnis, possimus beatae aliquam explicabo, recusandae veritatis earum repellendus, impedit.</p>
                            <button className='btn btn-success'>Google Store</button>
                            <button className='btn btn-success ms-2'>Apple Store</button>
                        </div>
                    </Col>
                    <Col md={6} sm={12}>
                      <div className="img">
                          <img height='400px' src="https://i.ibb.co/ftKbNjG/dashboard1.png" alt="" />
                      </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default TrySoftWare;