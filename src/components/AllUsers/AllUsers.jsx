import React, { useEffect, useState } from "react";

const AllUsers = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://physics-server.vercel.app/users")
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">User List</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {users.map((user) => (
          <div key={user._id} className="bg-white p-4 shadow-md rounded-md">
            <img
              src={user.image}
              alt={user.name}
              className="w-20 h-20 rounded-full mx-auto mb-4"
            />
            <h2 className="text-xl font-bold mb-2">Name: {user.displayName}</h2>
            <p className="text-gray-500 mb-2">User Gmail: {user.email}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllUsers;
