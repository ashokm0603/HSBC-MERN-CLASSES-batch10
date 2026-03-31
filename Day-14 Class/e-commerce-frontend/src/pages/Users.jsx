import React, { useEffect, useState } from "react";
import AdminNav from "../components/AdminNav";
import axios from "axios";

const Users = () => {
  const [users, setUsers] = useState([]);

  const fetchUsers = async () => {
    try {
      const response = await axios.get(
        "http://localhost:5000/api/get-allusers",
      );
      setUsers(response.data.registeredUsers);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    fetchUsers();
  }, []);

  return (
    <div>
      <AdminNav />
      <h1 id="title">No.  of Users Details</h1>

      <div className="m-5">
        <table className="table">
          <thead>
            <tr>
              <th className="bg-warning-subtle text-center border border-warning">
                Registered Date
              </th>
              <th className="bg-warning-subtle text-center border border-warning">Name</th>
              <th className="bg-warning-subtle text-center border border-warning">Email</th>
              <th className="bg-warning-subtle text-center border border-warning">Phone</th>
              <th className="bg-warning-subtle text-center border border-warning">
                Gender
              </th>
              <th className="bg-warning-subtle text-center border border-warning">State</th>
              <th className="bg-warning-subtle text-center border border-warning">
                Address
              </th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr>
                <td className="border border-warning text-center">{user.createdAt.split("T")[0]}</td>
                <td className="border border-warning ">{user.name}</td>
                <td className="border border-warning ">{user.email}</td>
                <td className="border border-warning ">{user.phone}</td>
                <td className="border border-warning ">{user.gender}</td>
                <td className="border border-warning ">{user.state}</td>
                <td className="border border-warning ">{user.address}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Users;
