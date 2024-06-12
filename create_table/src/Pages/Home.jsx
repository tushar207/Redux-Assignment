import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";


function Home() {
  useEffect(() => {
    fetch();
  }, []);
  const [data, setData] = useState();
  const [record, setRecord] = useState();
  const fetch = async () => {
    const res = await axios.get(`http://localhost:3000/user`);
    setData(res.data);
    setRecord(res.data);
  };
  const Filter = (event) => {
    setRecord(
      data.filter((f) => f.name.toLowerCase().includes(event.target.value))
    );
  };
  const handledelete = async (id) => {
    const res = await axios.delete(`http://localhost:3000/user/${id}`);
    console.log(res.data);
    fetch();
  };
  const edithandle = async (id) => {
    const res = await axios.get(`http://localhost:3000/user/${id}`);
    console.log(res.data);
    setFormvalue(res.data);
  };
  const [formvalue, setFormvalue] = useState({
    id: "",
    name: "",
    email: "",
    phone: "",
    status: "Unblock",
  });

  const handlechange = (e) => {
    setFormvalue({
      ...formvalue,
      [e.target.name]: e.target.value,
    });
    console.log(formvalue);
  };

  const submithandle = async (i) => {
    i.preventDefault();

    try {
      const res = await axios.patch(
        `http://localhost:3000/user/${formvalue.id}`,
        formvalue
      );

      if (res.status === 200) {
        alert('Data updated Successfully');
        setFormvalue({ id: '', name: '', email: '', phone: '' });
        fetch()
      } else {
        alert(`Failed to update data. Status code: ${res.status}`);
      }
    } 
    catch (error) {
      console.error('Error updating data:', error);
      alert('An error occurred while updating data. Please try again later.');
    }
  };

  const statushand = async (id) => {
    const res = await axios.get(`http://localhost:3000/user/${id}`);
    if(res.data.status=="Block")
    {
      const res1 = await axios.patch(`http://localhost:3000/user/${id}` , {status : "Unblock"});
     if(res1.status == 200)
     {
      console.log(res1.data);
      fetch();
      toast.success('Unblock success')
     }
    }
    else{
      const res1 = await axios.patch(`http://localhost:3000/user/${id}` , {status : "Block"});
      if(res1.status == 200)
      {
       console.log(res1.data);
       fetch();
       toast.success('Block success')
      }
    }
  };

  return (
    <>
      <div class="container">
        <div class="form-group">
          <label for="usr">Name:</label>
          <input
            type="text"
            class="form-control"
            id="usr"
            placeholder="Search Name"
            onChange={Filter}
          />
        </div>
        <h2 className="mr-5">Search : User  </h2>
        <Link to="/add_table">
          {" "}
          <button className="btn btn-danger">Add User</button>
        </Link>
        <p>
          TABLE
        </p>
        <table class="table">
          <thead>
            <tr>
              <th>id</th>
              <th>username</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Action</th>
              <th>Action</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {record &&
              record.map((value) => {
                return (
                  <tr>
                    <td>{value.id}</td>
                    <td>{value.name}</td>
                    <td>{value.email}</td>
                    <td>{value.phone}</td>
                    <td>
                        <button className="btn btn-info" onClick={()=> statushand(value.id)} >{value.status}</button>
                    </td>
                    <td>
                      <button
                        className="btn btn-success"
                        data-toggle="modal"
                        data-target="#myModal"
                        onClick={() => edithandle(value.id)}
                      >
                        Edit
                      </button>
                    </td>
                    <td>
                      <button
                        className="btn btn-danger"
                        onClick={() => handledelete(value.id)}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </table>
        <div class="modal" id="myModal">
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <h4 class="modal-title">Modal Heading</h4>
                <button type="button" class="close" data-dismiss="modal">
                  &times;
                </button>
              </div>

              <div class="modal-body">
                <form
                  method="post"
                  role="form"
                  action=""
                  onChange={handlechange}
                  onSubmit={submithandle}
                >
                  <div className="form-group">
                    <label htmlFor="usr">Name:</label>
                    <input
                      type="text"
                      className="form-control"
                      id="usr"
                      name="name"
                      value={formvalue.name}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="pwd">Email:</label>
                    <input
                      type="text"
                      className="form-control"
                      id="pwd"
                      name="email"
                      value={formvalue.email}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="pwd">Phone:</label>
                    <input
                      type="number"
                      className="form-control"
                      id="pwd"
                      name="phone"
                      value={formvalue.phone}
                    />
                  </div>
                  <button type="submit" className="btn btn-primary" >
                    Edit
                  </button>
                </form>
              </div>

              <div class="modal-footer">
                <button
                  type="button"
                  class="btn btn-danger"
                  data-dismiss="modal"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;