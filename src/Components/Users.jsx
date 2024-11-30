import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const Users = () => {
  const allAuthData = useLoaderData();
  const [users,setUsers] = useState(allAuthData)
  const handleDelete = (_id)=>{
    console.log(_id);
    Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!"
      }).then((result) => {
        if (result.isConfirmed) {
            fetch(`http://localhost:5000/users/${_id}`,{
                method: 'DELETE'
            })
            .then(res => res.json())
            .then(data => {
                console.log('confirm delete',data);
                if(data.deletedCount){
                    Swal.fire({
                        title: "Deleted!",
                        text: "User has been deleted.",
                        icon: "success"
                      });
                      const remaining = users.filter(f=> f._id !== _id)
                      setUsers(remaining)
                }
                
            })
          
        }
      });
  }
  return (
    <div>
      <h2 className="text-xl text-black font-bold ml-20 underline">Total Auth User: {allAuthData.length}</h2>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr className="text-xl text-black">
              <th>Ser No</th>
              <th>Name</th>
              <th>Email</th>
              <th>Created At</th>
              <th>Last Sign In Time</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {users.map((user,i) => (
              <tr key={i}>
                <th>{i + 1}</th>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.createdAt}</td>
                <td>{user.lastSignInTime}</td>
                <td className="flex gap-2">
                    <button className="btn">E</button>
                    <button onClick={()=>handleDelete(user._id)} className="btn">X</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Users;
