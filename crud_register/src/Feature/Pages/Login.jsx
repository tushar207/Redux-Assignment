import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Header2 from "../components/Header2";

function Login() {
    const redirect = useNavigate();
  useEffect(() => {
    if (localStorage.getItem("userid")) {
      redirect("/");
    }
    fetch();
  }, []);
  const [data, setData] = useState([]);
  const fetch = async () => {
    const res = await axios.get(`http://localhost:3000/user`);
    console.log(res.data);
    setData(res.data);
  };

  const [formvalue, setFormvalue] = useState({
    email: "",
    password: "",
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
    const res = await axios.get(
      `http://localhost:3000/user/?email=${formvalue.email}`
    );
    console.log(res);
    if (res.data.length > 0) {
      if (res.data[0].password == formvalue.password) {
        if (res.data[0].status == "Unblock") {
          localStorage.setItem("userName", res.data[0].name);
          localStorage.setItem("userid", res.data[0].id);
          localStorage.setItem("useremail", res.data[0].email);
          toast.success("login success");
          redirect("/");
          return false;
        } else {
          toast.error("user is block success");
          setFormvalue({ ...formvalue, id: "", email: "", password: "" });
          return false;
        }
      } else {
    toast.error("password is not match");
        
        setFormvalue({ ...formvalue, id: "", email: "", password: "" });
        return false;
      }
    } else {
    toast.error("user is not found");

      setFormvalue({ ...formvalue, id: "", email: "", password: "" });
      return false;
    }
  };
  return (
    <>
    <Header2 title='Login' />
      <div className="container mt-5">
        <h2>Login form</h2>
        <form action="" method="post"  role="form" onSubmit={submithandle}  onChange={onchagehandle}>
          <div className="mb-3 mt-3">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              className="form-control"
              id="email"
              placeholder="Enter email"
              name="email"
              value={formvalue.email}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="pwd">Password:</label>
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

export default Login;