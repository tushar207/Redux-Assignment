import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { toast } from 'react-toastify';
import { Link, redirect, useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { get_user, userupdate } from '../UserSlice';
import Header2 from '../components/Header2';



function Edit_user() {
   
    const [formvalue, setFormvalue] = useState({
        name: "",
        mobile: "",
        img: "",
    });

    const {user}=useSelector((state)=>state.user);

    const dispatch=useDispatch();
    useEffect(()=>{
        dispatch(get_user());
        editdata();
    },[]);

    const {id}=useParams();
    const editdata=()=>{
        const singledata=user.filter((value)=>{ return value.id==id});
        setFormvalue(singledata[0]);
    }

    const changeHandel = (e) => {
        setFormvalue({ ...formvalue, [e.target.name]: e.target.value });
        console.log(formvalue);
    }

    const vadidation = () => {
        var result = true;
        if (formvalue.name == "") {
            toast.error('Name Field is required !')
            result = false;
            return false;
        }
      
        if (formvalue.email == "") {
            toast.error('mobile Field is required !')
            result = false;
            return false;
        }
        if (formvalue.phone == "") {
            toast.error('img Field is required !')
            result = false;
            return false;
        }
        return result;
    }

    const redirect=useNavigate();
    const submitHandel = async (e) => {
        e.preventDefault();
        if (vadidation()) {
            dispatch(userupdate(formvalue))
            toast.success('User Updated success');
            redirect('/');
        }
    }



    return (
        <>
        <Header2 title='Edit'/>
        <div class="container mt-5">
            <div class="row">
                <div class="col-sm-12">
                    <h2>Edit User</h2>
                    <Link to="/" className='btn btn-primary float-end mb-5'>Back</Link>
                    <form action="" method='post' onSubmit={submitHandel} >
                        <div className="mb-3 mt-3">
                            <label htmlFor="email" className="form-label">Name:</label>
                            <input type="text" value={formvalue.name} onChange={changeHandel} className="form-control"  placeholder="Enter Name" name="name" />
                        </div>
                      
                        <div className="mb-3 mt-3">
                            <label htmlFor="email" className="form-label">Mobile:</label>
                            <input type="number" value={formvalue.email} onChange={changeHandel} className="form-control"  placeholder="Enter Mobile" name="email" />
                        </div>
                        <div className="mb-3 mt-3">
                            <label htmlFor="email" className="form-label">Phone:</label>
                            <input type="text" value={formvalue.phone} onChange={changeHandel} className="form-control" name="phone" />
                        </div>
                       
                        <button type="submit" className="btn btn-primary">Save</button>
                    </form>

                </div>
            </div>
        </div>
        </>
    )
}

export default Edit_user