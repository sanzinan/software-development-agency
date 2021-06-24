import React, { useEffect, useState } from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css";
import "swiper/components/navigation/navigation.min.css";
import "./Testimonial.css";
// import Swiper core and required modules
import SwiperCore, { Autoplay, Pagination, Navigation } from "swiper/core";
import axios from "axios";

// install Swiper modules
SwiperCore.use([Autoplay, Pagination, Navigation]);

const Testimonial = () => {
  const [testimonials, setTestimonials] = useState([])
    
    async function asyncTestimonialData() {
        try {
            const response = await axios.get("https://server-agency.herokuapp.com/testimonials");
            const data = await response.data
            setTestimonials(data)
          } catch (error) {
            alert(error);
          }
      }
      useEffect(()=>{
        asyncTestimonialData();
      },[])
  return (
    <section className="my-5 testimonial">
      <Container>
        <Row style={{padding:'100px 0px'}}>
          <Col md={4} sm={12} className='d-flex justify-content-center align-items-center'>
            <div className="testimonial-content">
              <span style={{color:'#E56768'}}>APP REVIEWS</span>
              <h2 className="fw-bolder" style={{ color: "#3D486F" }}>
                What our Clients <br />
                are Saying
              </h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Ducimus beatae, sed ab. Expedita qui deleniti laborum facilis,
                cupiditate adipisci ea, eos id quaerat quis. Iusto suscipit,
                dolore veniam earum doloremque!
              </p>
            </div>
          </Col>
          <Col md={6} sm={12} className='offset-lg-2'>
            <Swiper
              spaceBetween={30}
              centeredSlides={true}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              pagination={{
                clickable: true,
              }}
              navigation={true}
              className="mySwiper"
            >
              {
                testimonials.map((Testimonial, index) => (
                  <SwiperSlide key={index}>
                    <Card className='text-center slider-cart'>
                       <img src={Testimonial.image || 'https://static.thenounproject.com/png/363640-200.png'} alt="testimonial" />
                       <p>{Testimonial.author}</p>
                       <span>{Testimonial.content}</span>
                    </Card>
                  </SwiperSlide>
                ))
              }
            </Swiper>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Testimonial;
