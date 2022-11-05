import React, { useEffect, useState } from 'react';
import List from '../../layouts/List';
import api from '../../../api';
import Loader from '../../UI/Loader';

const UsersList = () => {
  const [users, setUsers] = useState();
  useEffect(() => {
    api.users.fetchAll().then((data) => setUsers(data));
  }, []);

  if (users) {
    return <>{users && <List data={users} />}</>;
  }
  return <Loader />;
};

export default UsersList;
