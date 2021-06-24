import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useForm } from "react-hook-form";

const MakeAdmin = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    fetch("https://server-agency.herokuapp.com/makeAdmin", {
      method: "POST",
      headers: { "content-Type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((success) => {
        if (success) {
          alert("Admin Add Successful");
        }
      });
  };
  return (
    <section>
      <Container>
        <Row>
          <Col>
            <div className="col-sm-8 pt-5">
              <form
                className="form-group col-sm-8"
                onSubmit={handleSubmit(onSubmit)}
              >
                <input
                  className="form-control my-3"
                  {...register("name", { required: true })}
                  placeholder="Enter Admin Name"
                />
                {errors.name && <span>Please Enter Admin Name </span>}
                <input
                  className="form-control my-3"
                  {...register("email", { required: true })}
                  placeholder="Enter Admin Email"
                />
                {errors.email && <span>Please Enter Admin Email </span>}

                <input
                  className="btn btn-success"
                  type="submit"
                  value="Confirm"
                />
              </form>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default MakeAdmin;
