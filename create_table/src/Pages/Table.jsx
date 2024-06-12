import axios from "axios";
import React, { useState } from "react";
import { Link } from "react-router-dom";

function Table() {

    const [formvalue , setFormvalue] = useState({
        id:"",
        name : "",
        email:"",
        phone: "",
        status: "Unblock",
    })

    const handlechange = (e) =>{
  setFormvalue({...formvalue , id : new Date().getTime().toString() , [e.target.name] : e.target.value})
    console.log(formvalue);   
}

const submithandle = async (i)=>{
i.preventDefault();
const res = await axios.post(`http://localhost:3000/user` , formvalue);
console.log(res);
if(res.status==201){
    alert("Data added Successfully");
    setFormvalue({...formvalue ,   name : "",
        email:"" , phone:""})
}
}
  return (
    <div>
      <div className="container">
        <h2>Form control: input</h2>
        <Link to="/"> <button className="btn  btn-info">Back</button>  </Link>
        <form method="post" role="form" action="" onChange={handlechange} onSubmit={submithandle}>
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
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default Table;