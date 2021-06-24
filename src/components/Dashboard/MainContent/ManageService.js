import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import { BsFillTrashFill } from "react-icons/bs";
import './ManageService.css'

const ManageService = () => {
    const [services, setServices] = useState([])
    async function getProduct() {
        try {
          const response = await axios.get('https://server-agency.herokuapp.com/services');
          setServices(response.data)
        } catch (error) {
          console.error(error);
        }
      }
      useEffect(() =>{
        getProduct()
      },[])

      const deleteService = (id) =>{
        fetch(`https://server-agency.herokuapp.com/delete/${id}`,{
            method: "DELETE"
        })
        .then(res => {
          alert('Success')
        })
        .catch((error) => {
          alert('error massage',error);
      })
      setServices(services.filter(service => service._id !== id))
       }
    return (
        <div>
            <div className="manage__header px-4">
                 <h2>Manage Your Product</h2>
            </div>
            <div className="content__table">
            <Table striped borderless hover>
            <thead>
                <tr>
                <th>Service Name</th>
                <th>Description</th>
                <th className='text-center'>Action</th>
                </tr>
            </thead>
          <tbody>
              {
                  services.map((service)=>(
                      <tr key={service._id}>
                          <td>{service.title}</td>
                          <td>{service.description}</td>
                          <td  className='text-center'> <span onClick={() => deleteService(service._id)} style={{cursor:'pointer'}}><BsFillTrashFill/></span></td>
                      </tr>
                  ))
              }
          </tbody>
       </Table>
            </div>
        </div>
    );
};

export default ManageService;