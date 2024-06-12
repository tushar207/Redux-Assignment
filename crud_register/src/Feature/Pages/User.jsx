import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { toast } from "react-toastify";
import { insert_user } from '../UserSlice';
import Header2 from '../components/Header2';
function User() {
  
  const dispatch = useDispatch()
  const [formvalue, setFormvalue] = useState({
    id: "",
    name: " ",
    email: "",
    phone:""
  });
  
  const Changehandle = (e) => {
    setFormvalue({
      ...formvalue,
      id: new Date().getTime().toString(),
      [e.target.name]: e.target.value,
    });
    console.log(formvalue);
  };


  const validation = () => {
    var result = true;
    if (formvalue.cate_name == "") {
      toast.error("Name Field is required !");
      result = false;
      return false;
    }

    if (formvalue.cate_img == "") {
      toast.error("img Field is required !");
      result = false;
      return false;
    }
    return result;
  }
  const submithandle = async  (e)=>{
        e.preventDefault();
    if(validation()){
      dispatch(insert_user(formvalue))
      toast.success('Data insert success')
      setFormvalue({...formvalue ,   name: " ",
        email: "",
        phone:"" })
      console.log(formvalue);
    } 
    }

  return (
    <>
    <Header2 title='Add_employee' />
    <div className='container mt-5'>

    
   <form action=" " method='post' role='form' onSubmit={submithandle}>
  <div className="mb-3 mt-3">

    <label htmlFor="email" className="form-label">Emp Name:</label>
    <input type="text" className="form-control"  placeholder="Enter UserName"  onChange={Changehandle}
      name="name"
     value={formvalue.name} />
  </div>
  <div className="mb-3">
    <label htmlFor="" className="form-label">Email:</label>
    <input type="text" className="form-control"  placeholder="Enter Email"  onChange={Changehandle}
      name="email"
     value={formvalue.email} />
  </div>  
  <div className="mb-3">
    <label htmlFor="" className="form-label">Phone:</label>
    <input type="number" className="form-control"  placeholder="Enter phone"  onChange={Changehandle}
      name="phone"
     value={formvalue.phone} />
  </div>
  <div className="form-check mb-3">
    <label className="form-check-label">
      <input className="form-check-input" type="checkbox"  onChange={Changehandle}
      name="phone"
     value={formvalue.phone} /> Remember me
    </label>
  </div>
  
  <button type="submit" className="btn btn-primary">Submit</button>
</form>
</div>
    </>
  )
}

export default User