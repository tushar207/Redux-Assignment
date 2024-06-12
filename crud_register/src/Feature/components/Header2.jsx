import React, { useEffect, useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import axios from 'axios';
import { toast } from 'react-toastify';
// import { toast } from "react-toastify";


function Header2({title}) {
    const redirect = useNavigate()
    const userlogout = () => {
        localStorage.removeItem("userid");
        localStorage.removeItem("username");
        // toast.success("logout is success");
        // alert('logout is success')
        toast.success('logout is success')
        redirect("/login");
        return false;
      };
      const [loguser, setLoguser] = useState(null);
      useEffect(() => {
        const user = localStorage.getItem("userid");
        if (user) {
          setLoguser(user);
        }
      }, []);
      useEffect(() => {
        fetch();
      }, []);
      const [data, setData] = useState([]);
      const fetch = async () => {
        const res = await axios.get(`http://localhost:3000/user`);
        console.log(res.data);
        setData(res.data);
      };
    return (
        <div>
            <div className="container-fluid bg-danger text-white d-none d-lg-block">
                <div className="row py-2 px-lg-5">
                    <div className="col-lg-6 text-left mb-2 mb-lg-0">
                        <div className="d-inline-flex align-items-center">
                            <small><i className="fa fa-phone-alt mr-2" />+91 1234567890</small>
                            <small className="px-3">|</small>
                            <small><i className="fa fa-envelope mr-2" />tushar@gmail.com</small>
                        </div>
                    </div>
                    <div className="col-lg-6 text-right">
                        <div className="d-inline-flex align-items-center">
                        <NavLink to="/profile" className=' mx-2'>
                  {(
                    ()=>{
                        if(localStorage.getItem("userid"))
                            {
                                return(
                                    <>
                                     <span >hi...{localStorage.getItem("userName")}</span>
                                    </>
                                )
                            }
                    }
                  )()}
                 
                </NavLink>
                            <a className="text-primary px-2" >
                                <i className="fab fa-facebook-f" />
                            </a>
                            <a className="text-primary px-2" >
                                <i className="fab fa-twitter" />
                            </a>
                            <a className="text-primary px-2" >
                                <i className="fab fa-linkedin-in" />
                            </a>
                            <a className="text-primary px-2" >
                                <i className="fab fa-instagram" />
                            </a>
                            <a className="text-primary pl-2" >
                                <i className="fab fa-youtube" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            {/* Topbar End */}
            {/* Navbar Start */}
            <div className="container-fluid p-0">
            <nav className="navbar navbar-expand-lg bg-secondary text- navbar-light py-3 py-lg-0 px-lg-5">
                    <NavLink to="/" className="navbar-brand ml-lg-3">
                        <h1 className="m-0 text-primary"><span className="text-dark">Application</span>  </h1>
                    </NavLink>
                    <button type="button" className="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse justify-content-between px-lg-3" id="navbarCollapse">
                        <div className="navbar-nav m-auto py-0">
                            <NavLink to="/" className="nav-item nav-link text-dark">Manage_employee</NavLink>
                            {/* <NavLink to="/" className="nav-item nav-link">About</NavLink>
                            <NavLink to="/" className="nav-item nav-link">Services</NavLink> */}
                            {/* <div className="nav-item dropdown">
                                <a href="#" className="nav-link dropdown-toggle" data-toggle="dropdown">Categories</a>
                                <div className="dropdown-menu rounded-0 m-0">
                                    {
                                        data && data.map((value)=>{
                                            return(
                                    <NavLink  to={'/services_details/' + value.id}  className="dropdown-item" style={{color :"black"}}>{value.cate_name}</NavLink>
                                            )
                                        })
                                    }
                                    <NavLink to="/view_service" className="dropdown-item">Hair wash Spa</NavLink>
                                    <NavLink to="/gallery" className="dropdown-item">Gallery</NavLink>
                                </div>
                            </div> */}
                            <NavLink to="/Add_user" className="nav-item nav-link">Add employee </NavLink>
                        </div>
                        {/* <NavLink to="/login" className="btn btn-primary d-none d-lg-block">Login</NavLink> */}
                        {loguser && (
              <>
                {/* <NavLink to="/profile">
                  <i className="fa fa-user" aria-hidden="true" />
                  <span>{localStorage.getItem("userName")}</span>
                </NavLink> */}
                <NavLink to="/"className="btn btn-danger mx-2" >
                   <i className="fa fa-user " aria-hidden="true" /> Profile
                </NavLink>
                <a href="javascript:void(0)" onClick={userlogout}>
                  <i className="btn btn-danger mx-2" >Logout</i>
                </a>
              </>
            )}
             {!loguser && (
              <>
                <NavLink to="/login">
                  <button className="btn btn-warning mx-2">Login</button>
                </NavLink>

                <NavLink to="/signup">
                  <button className="btn btn-warning mx-2">Signup</button>
                </NavLink>
              </>
            )}
                    </div>
                </nav>
            </div>
            {/* Navbar End */}
            {/* Header Start */}
            <div className="jumbotron jumbotron-fluid bg-info " style={{ marginBottom: 90  , backgroundImage : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxD0f0Whnol8Zkt_GU4ws9EgRqMc_3kt1q6w&s"}}>
                <div className="container text-center py-5">
                    <h3 className="text-white display-3 mb-4">{title}</h3>
                    <div className="d-inline-flex align-items-center text-white">
                        <p className="m-0"><a className="text-white" >Home</a></p>
                        <i className="far fa-circle px-3" />
                        <p className="m-0">{title}</p>
                    </div>
                </div>
            </div>
            {/* Header End */}
        </div>

    )
}

export default Header2