import React from 'react';

// Example user data
const user = {
  name: 'John Doe',
  email: 'john@example.com',
  profilePicture: '/profile-picture.jpg', // Path to the profile picture
};

const ProfilePage: React.FC = () => {
  return (
    <div className="container mx-auto p-4">
      <div className="text-center">
        <img
          src={user.profilePicture}
          alt="Profile Picture"
          className="rounded-full w-24 h-24 mx-auto mb-4"
        />
        <h1 className="text-2xl font-semibold">{user.name}</h1>
        <p className="text-gray-600">{user.email}</p>
      </div>
    </div>
  );
};

export default ProfilePage;
