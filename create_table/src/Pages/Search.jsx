// src/TableSearch.js
import React, { useState } from 'react';

const Search = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [data] = useState([
    { id: 1, name: 'John Doe', age: 28, city: 'New York' },
    { id: 2, name: 'Jane Smith', age: 34, city: 'San Francisco' },
    { id: 3, name: 'Michael Johnson', age: 45, city: 'Chicago' },
    { id: 4, name: 'Sarah Wilson', age: 29, city: 'Los Angeles' },
    { id: 5, Firstname: 'John Doe', Lastname: 'Los Angeles', Email: 'Los Angeles' },
    { id: 6, name: 'Sarah Wilson', age: 29, city: 'Los Angeles' },
  ]);

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredData = data.filter(item => 
    item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.city.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.Firstname.toLowerCase().includes(searchTerm.toLowerCase())  ||
    item.Lastname.toLowerCase().includes(searchTerm.toLowerCase())

  );
  return (
    <>
    
<div class="container">
  <h2>Basic Table</h2>
  <input
        type="text"
        placeholder="Search..."
        value={searchTerm}
        onChange={handleSearch}
      />
  <table class="table">
    <thead>
      <tr>
        <th>Firstname</th>
        <th>Lastname</th>
        <th>Email</th>
        <th>Action</th>

      </tr>
    </thead>
    <tbody>
    {filteredData.map(item => (
            <tr key={item.id}>
              <td>{item.Firstname}</td>
              <td>{item.Lastname}</td>
              <td>{item.Email}</td>
            </tr>
          ))} 
      {/* <tr>
        <td>John</td>
        <td>Doe</td>
        <td>john@example.com</td>
        <td>Delete</td>

      </tr>
      <tr>
        <td>Mary</td>
        <td>Moe</td>
        <td>mary@example.com</td>
        <td>Delete</td>
      </tr>
      <tr>
        <td>July</td>
        <td>Dooley</td>
        <td>july@example.com</td>
        <td><span  className='btn btn-danger'>Delete</span> </td>
      </tr> */}
    </tbody>
  </table>
</div>
    <div>
      {/* <input
        type="text"
        placeholder="Search..."
        value={searchTerm}
        onChange={handleSearch}
      /> */}
      <table border="1" className=''>
        <thead>
          <tr>
            <th>Name</th>
            <th>Age</th>
            <th>City</th>
          </tr>
        </thead>
        <tbody>
          {/* {filteredData.map(item => (
            <tr key={item.id}>
              <td>{item.name}</td>
              <td>{item.age}</td>
              <td>{item.city}</td>
            </tr>
          ))} */}
        </tbody>
      </table>
      
    </div>

    </>
  );
};

export default Search;