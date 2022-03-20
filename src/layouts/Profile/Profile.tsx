import React from 'react';

import { TProfileProps } from '@/layouts/Profile/Profile.types';

const Profile: React.FC<TProfileProps> = ({ children }) => {
  return <div className="Profile">{children}</div>;
};

export default Profile;
