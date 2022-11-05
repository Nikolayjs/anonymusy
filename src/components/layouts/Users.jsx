import React from 'react';
import { useParams } from 'react-router-dom';
import UserEdit from '../page/UserEdit';
import UsersList from '../page/UsersList';

const Users = () => {
  const params = useParams();
  const { userId } = params;
  return <>{userId ? <UserEdit userId={userId} /> : <UsersList />}</>;
};

export default Users;
