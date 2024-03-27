import React from 'react';
import { TUser } from '@/utils/types/auth'; // Import your custom types

interface UserProfileProps {
  user: TUser;
}

const UserProfile: React.FC<UserProfileProps> = ({ user }) => {
  return (
    <div>
      <h2>User Profile</h2>
      <p>Name: {user.firstName} {user.lastName}</p>
      <p>Email: {user.email}</p>
      {/* Add other user details here */}
    </div>
  );
};

export default UserProfile;
