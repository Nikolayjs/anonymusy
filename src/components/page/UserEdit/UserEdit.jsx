import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import api from '../../../api';
import Loader from '../../UI/Loader';
import UserProfileCard from '../../UI/UserProfileCard';

const UserEdit = ({ userId }) => {
  const history = useHistory();
  const [user, setUser] = useState();
  useEffect(() => {
    api.users.getById(userId).then((data) => setUser(data));
  }, []);

  const handleChange = () => {
    history.replace(`/users`);
  };
  if (!user) return <Loader />;
  return (
    <div className="text-center">
      <h1 className="text-5xl text-gray-900 dark:text-white mb-5">Карточка анонимуса</h1>
      <UserProfileCard
        name={user.firstName}
        surName={user.secondName}
        avatar={user.avatar}
        prof={user.prof}
        age={user.age}
        url={user.url}
        onChange={handleChange}
        userId={user.id}
      />
    </div>
  );
};

export default UserEdit;
