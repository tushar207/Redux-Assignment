import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { delete_user, get_user } from '../UserSlice'
import { toast } from 'react-toastify'
import Header2 from '../components/Header2'

function Manage_User() {
    const redirect = useNavigate()
    const { user } = useSelector((state)=> state.user)
    const dispatch = useDispatch()

    
useEffect(()=>{
  dispatch(get_user());
})
  return (
   <>
   <Header2 title='Manage_User' />
   <div class="container mt-3">
   
  <h2>Manage Employee</h2>
  <Link to="/Add_user"> <button className='btn btn-info'>Add</button></Link>
  <table class="table table-hover">
    <thead>
      <tr>
        <th>UserName</th>
        <th>Email</th>
        <th>Phone</th>
        <th>Action</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
     {
        user && user.map((value)=>{
            return(
                <tr>
                <td>{value.name}</td>
                <td>{value.email}</td>
                <td>{value.phone}</td>
                <td>
                    <button className='btn btn-success' onClick={() => redirect('/edit/'+ value.id)}>Edit</button>
                </td>
                <td>
                    <button className='btn btn-danger' onClick={()=> {dispatch(delete_user(value.id))
                             toast.success('data Delete')
                    }
                }>Delete</button>
                </td>
              </tr>
            )
        })
     }
    </tbody>
  </table>
</div>

   </>
  )
}

export default Manage_User