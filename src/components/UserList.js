import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
 
const UserList = () => {
  const [users, setUser] = useState([]);
 
  useEffect(() => {
    getUsers();
  }, []);
 
  const getUsers = async () => {
    const response = await axios.get("http://localhost:5000/users");
    setUser(response.data);
  };
 
  const deleteUser = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/users/${id}`);
      getUsers();
    } catch (error) {
      console.log(error);
    }
  };
 
  return (
    <div className="columns mt-7">
      <div className="column is-full">
        <Link to="add" className="button is-success" align="left">
        Add New
        </Link>
        <table align="center">
          <thead>
            <tr>
              <th>No</th>
              <th>Name</th>
              <th>Email</th>
              <th>Gender  </th>
              <th>BloodType  </th>
              <th>Organ  </th>
              <th>TissueSize</th>
              <th>Urgency  </th>
              <th>Actions  </th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={user._id}>
                <td>{index + 1}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.gender}</td>
                <td>{user.bloodtype}</td>
                <td>{user.organ}</td>
                <td>{user.tissuesize}</td>
                <td>{user.urgency}</td>
                <td>
                  <Link to={`edit/${user._id}`}className="button is-info is-small mr-1">
                  Edit
                  </Link>
                  <button onClick={() => deleteUser(user._id)}className="button is-danger is-small">
                  Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
 
export default UserList;