import React, {useContext, useEffect, useState } from 'react';
import { Col, Container, FormLabel, Row } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { useLocation, useParams } from 'react-router-dom';
import { UserContext } from '../../App';
// import { useParams } from 'react-router-dom';
import PaymentMethod from '../../components/Payment/PaymentMethod'
// import { UserContext } from '../../App';


const GetService = () => {

  // const {serviceId} = useParams()
  // console.log(serviceId);
 
  useEffect(() => {
    window.scrollTo(0, 0);
},[]);
  const {pathname} = useLocation()
  // console.log(pathname);
  const id = pathname.split('/')[2].trim()
  // console.log(id);
  const [processOrderFormData, setProcessOrderFormData] = useState(null)
  const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm();
      
      const [loggedInUser, setLoggedInUser] = useContext(UserContext)
      const [service, setService] = useState({});
      useEffect(() => {
        fetch("https://server-agency.herokuapp.com/singleService/" + id)
          .then((res) => res.json())
          .then((data) => setService(data));
      }, [id]);
      console.log(service);
      
      
       
      const onSubmit = (data) => {
        console.log(data);
        setProcessOrderFormData(data)
      }

      const handlePaymentSuccess = (paymentId) => {
        let today = new Date();
        let dateFormate=today.getDate() + "-"+ parseInt(today.getMonth()+1) +"-"+today.getFullYear();
         const newOrder = {...service}
         const {title, description, icon} = newOrder;
         const {email, displayName} = loggedInUser;
          const confirmOrder = {title, icon, description, email, displayName, paymentId, processOrderFormData, status: 'Pending' , date: dateFormate}
              fetch('https://server-agency.herokuapp.com/addOrder', {
                method: 'POST' ,
                headers: {
                    'content-type' : 'application/json'
                },
                body: JSON.stringify(confirmOrder)
            })
          .then(res => res.json())
          .then(data => {
              console.log(data);
              if (data) {
                alert('Order Placed')
              }
          })
      }
   
   
    return (
       <section>
       <Container>
           <Row>
                <Col>
        <h2 className='text-info'>Get Service:</h2> 
        <div style={{display: processOrderFormData ? 'none' : 'block' }} className="col-md-6 my-3"> <br/>

          <form onSubmit={handleSubmit(onSubmit)}>
        <FormLabel>Selected Service Title:</FormLabel>
                <input
                  className="form-control "
                  defaultValue={service.title}
                  {...register("serviceTitle")}
                />
                {errors.serviceTitle && (
                  <small className="text-danger"> This field is required</small>
                )}
               <FormLabel>Your Name:</FormLabel>
                <input
                  className="form-control"
                  defaultValue={loggedInUser.displayName}
                  {...register("author")}
                />
                {errors.author && (
                  <small className="text-danger">This field is required</small>
                )} <br/>
                <FormLabel>Email:</FormLabel>
                <input
                  className="form-control"
                  type='email'
                  defaultValue={loggedInUser.email}
                  {...register("email")}
                />
                {errors.email && (
                  <small className="text-danger">This field is required </small>
                )}
                <FormLabel>Address:</FormLabel>
                <input
                  className="form-control "
                  placeholder='Your Address'
                  {...register("address", { required: true })}
                />
                {errors.address && (
                  <small className="text-danger"> Write down your address which length maximum 100 characters</small>
                )} <br/>
                <FormLabel>Phone:</FormLabel>
                <input
                  className="form-control"
                  placeholder='Your phone number'
                  type='number'
                  {...register("phone", { required: true })}
                />
                {errors.phone && (
                  <small className="text-danger"> This field is required</small>
                )} <br/>
               
               <input className='btn btn-success' type="submit" value="Next"/>
                
            </form>

        </div>
        <div style={{display: processOrderFormData ? 'block' : 'none' }} className="col-md-6 bg-black mt-5 p-5">
        <p className='text-success text-center'>Pay Now:</p>
          <PaymentMethod paymentProcess={handlePaymentSuccess}/>
        </div>      
                </Col>
           </Row>
       </Container>
       </section>
    );
};

export default GetService;