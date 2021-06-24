import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const HeroSection = () => {
  return (
    <section className="hero-section">
      <Container>
        <Row className='py-5'>
          <Col md={6} sm={12} className='my-auto'>
            <div>
                <h1>
                Easily Integrate chat to <br />
                your website
                </h1>
                <hr style={{width:'150px', color:'#FFF', padding:'2px'}}/>
                <p className='text-white'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe aspernatur adipisci minus assumenda omnis, possimus beatae aliquam explicabo, recusandae veritatis earum repellendus, impedit.</p>
                <button className='btn btn-success btn-sm'>Get Service</button>
                <button className='btn btn-success btn-sm m-3'>Contact Us</button>
            </div>
          </Col>
          <Col md={6} sm={12}><img height='95%' width='100%' src="https://i.ibb.co/3pnhpR4/laptop.png" alt="" /></Col>
        </Row>
      </Container>
    </section>
  );
};

export default HeroSection;
