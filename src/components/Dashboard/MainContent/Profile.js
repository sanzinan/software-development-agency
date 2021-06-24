import React, { useContext } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { UserContext } from "../../../App";
import "./Profile.css";
const Profile = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  return (
    <Container>
      <Row>
        <Col>
          <div className="p-5 d-flex justify-content-center align-items-center">
            <div id="profile-main-card">
              <div className="profile-cover-photo"></div>
              <div className="profile-photo">
                <img src={loggedInUser.photoURL || 'https://static.thenounproject.com/png/363640-200.png'} alt="" />
              </div>
              <div className="profile-content">
                <h4 className="profile-name text-center">
                  {loggedInUser.displayName}
                </h4>
                <p className="profile-fullstack text-center m-0">
                  MERN Stack Web Developer{" "}
                </p>
              </div>
              <div className="profile-contact">
                <span className="text-white bold">{loggedInUser.email}</span>
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Profile;
