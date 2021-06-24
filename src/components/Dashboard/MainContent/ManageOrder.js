import React, { useEffect, useState } from "react";
import { Col, Container, Dropdown, Row, Table } from "react-bootstrap";

const ManageOrder = () => {
  const [orderList, setOrderList] = useState([]);

  const orderFetch = () => {
    fetch("https://server-agency.herokuapp.com/allOrder")
      .then((res) => res.json())
      .then((data) => setOrderList(data));
  };

  useEffect(() => {
    orderFetch();
  }, []);

  const handelStatusUpdate = (e, order) => {
    console.log(e.target.innerText, order);
    const updateStatus = {
      id: order._id,
      status: e.target.innerText,
    };
    fetch("https://server-agency.herokuapp.com/updateOrderStatus", {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updateStatus),
    })
      .then((res) => res.json())
      .then((data) => {
        alert("Status Updated Successfully");
        orderFetch();
      });
  };

  return (
    <section>
      <Container>
        <Col>
          <Row>
          <h4 className="text-center text-success pt-2"> Order List </h4>
          <Table striped bordered hover responsive className="auto-index">
            <thead>
              <tr>
                <th>User Name</th>
                <th>Email</th>
                <th>Service</th>
                <th>paymentId</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {orderList.map((order) => (
                <tr>
                  <td>{order.displayName}</td>
                  <td>{order.email}</td>
                  <td>{order.title}</td>
                  <td>{order.paymentId}</td>
                  <td>
                    <Dropdown>
                      <Dropdown.Toggle variant="success" id="dropdown-basic">
                        {order.status}
                      </Dropdown.Toggle>

                      <Dropdown.Menu>
                        <Dropdown.Item
                          onClick={(e) => handelStatusUpdate(e, order)}
                        >
                          Pending
                        </Dropdown.Item>
                        <Dropdown.Item
                          onClick={(e) => handelStatusUpdate(e, order)}
                        >
                          On going
                        </Dropdown.Item>
                        <Dropdown.Item
                          onClick={(e) => handelStatusUpdate(e, order)}
                        >
                          Done
                        </Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
          </Row>
        </Col>
      </Container>
    </section>
  );
};

export default ManageOrder;
