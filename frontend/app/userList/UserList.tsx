// src/app/userList/UserList.tsx

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { checkAuthStatus } from '../utils/auth'; // Import your auth utility

// ...

const UserList: React.FC = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get('/api/users'); // Adjust the API endpoint
        setUsers(response.data);
      } catch (error) {
        console.error('Error fetching users:', error.message);
      }
    };

    fetchUsers();
  }, []);

  return (
    <div>
      <h2>User List</h2>
      {checkAuthStatus() ? (
        <table className="table">
          {/* Render user list */}
        </table>
      ) : (
        <p>Please log in to view user data.</p>
      )}
    </div>
  );
};

export default UserList;
