import axios from "axios";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import Header2 from "../components/Header2";

function Signup() {
  useEffect(() => {
    fetch();
  }, []);
  const [data, setData] = useState([]);
  const fetch = async () => {
    const res = await axios.get(`http://localhost:3000/user`);
    console.log(res.data);
    setData(res.data);
  };

  const [formvalue, setFormvalue] = useState({
    id: "",
    name: "",
    email: "",
    password: "",
    phone: "",
    status: "Unblock",
  });

  const onchagehandle = (e) => {
    setFormvalue({
      ...formvalue,
      id: new Date().getTime().toString(),
      [e.target.name]: e.target.value,
    });
    console.log(formvalue);
  };

  const submithandle = async (i) => {
    i.preventDefault();
    const res = await axios.post(`http://localhost:3000/user`, formvalue);
    console.log(res);
    if (res.status == 201) {
      // alert("data success");
      toast.success("data success");
      setFormvalue({
        ...formvalue,
        id: "",
        name: "",
        email: "",
        password: "",
        phone: "",
      });
    }
  };
  return (
    <>
    <Header2 title='Signup' />
      <div className="container mt-5">
        <h2>Signup </h2>
        <form
          action=" "
          method="post"
          role="form"
          onSubmit={submithandle}
          onChange={onchagehandle}
        >
          <div className="mb-3 mt-3">
            <label htmlFor="">UserName:</label>
            <input
              type="text"
              className="form-control"
              placeholder="UserName"
              name="name"
              value={formvalue.name}
            />
          </div>
          <div className="mb-3 mt-3">
            <label htmlFor="email">Email :</label>
            <input
              type="email"
              className="form-control"
              id="email"
              placeholder="Email "
              name="email"
              value={formvalue.email}
            />
          </div>
          <div className="mb-3 mt-3">
            <label htmlFor="">phone no. :</label>
            <input
              type="number"
              className="form-control"
              placeholder="phone no."
              name="phone"
              value={formvalue.phone}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="">Password:</label>
            <input
              type="password"
              className="form-control"
              placeholder="Enter password"
              name="password"
              value={formvalue.password}
            />
          </div>
          <div className="form-check mb-3">
            <label className="form-check-label">
              <input
                className="form-check-input"
                type="checkbox"
                name="remember"
              />{" "}
              Remember me
            </label>
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    </>
  );
}

export default Signup;