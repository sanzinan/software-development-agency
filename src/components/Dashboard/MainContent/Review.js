import React, { useContext } from "react";
import { Col, Container, FormLabel, Row } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { UserContext } from "../../../App";



const Review = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    const eventData = {
      image: data.image,
      content: data.content,
      author: data.author,
    };

    const url = `https://server-agency.herokuapp.com/addTestimonial`;
    fetch(url, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(eventData),
    })
      .then((res) => {
        alert("Add Successfully");
      })
      .catch((err) => alert(err));
  };
  return (
    <section>
      <Container>
        <Col>
          <Row>
            <h2 className="text-success text-center">Write a Review</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
              <FormLabel>Your Name:</FormLabel>
              <input
                className="form-control my-3"
                defaultValue={loggedInUser.displayName}
                {...register("author", { required: true })}
              />
              {errors.author && (
                <small className="text-danger">This field is required</small>
              )}{" "}
              <br />
              <FormLabel>Write A Review:</FormLabel>
              <input
                className="form-control my-3 "
                placeholder="Write a short review"
                {...register("content", { required: true, maxLength: 260 })}
              />
              {errors.content && (
                <small className="text-danger">
                  {" "}
                  Write down a review which length maximum 260 characters
                </small>
              )}{" "}
              <br />
              <FormLabel>Your Image URL:</FormLabel>
              <input
                className="form-control my-3"
                defaultValue={loggedInUser.photoURL}
                {...register("image")}
              />
              {errors.image && (
                <small className="text-danger">This field is required</small>
              )}
              <br />
              <input className="btn btn-success" type="submit" value="Submit" />
            </form>
          </Row>
        </Col>
      </Container>
    </section>
  );
};

export default Review;
