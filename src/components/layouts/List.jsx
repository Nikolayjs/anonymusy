import React, { useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useUsers } from '../../hooks/useUsers';
import Button from '../UI/Button';
import Card from '../UI/Card';
import CreateUser from '../UI/CreateUser';
import FilterInput from '../UI/FilterInput';

const List = () => {
  const [modal, setModal] = useState('hidden');
  const [filter, setFilter] = useState({ sort: '', query: '' });
  const [users, setUsers] = useState(JSON.parse(localStorage.getItem('users')));
  let sortedAndSearchedUsers = useUsers(users, filter.sort, filter.query);

  const handleModal = (mode) => {
    setModal(mode);
  };

  const handleDelete = (user) => {
    setUsers(users.filter((u) => u.id !== user));
    localStorage.setItem('users', JSON.stringify(users.filter((u) => u.id !== user)));
  };
  return (
    <>
      <h1 className="text-5xl text-gray-900 dark:text-white mb-5 text-center">Список анонимусов</h1>
      <FilterInput filter={filter} setFilter={setFilter} />
      {sortedAndSearchedUsers.map((item) => (
        <Card
          key={uuidv4()}
          avatar={item.avatar}
          name={item.firstName}
          surName={item.secondName}
          age={item.age}
          userId={item.id}
          onChange={handleDelete}
          url={item.url}
          prof={item.prof}
        />
      ))}
      <div className="max-w-lg mt-3 mx-auto">
        <Button text="Создать карту" className="mt-5" onClick={handleModal} />
      </div>
      <CreateUser modal={modal} onChange={handleModal} />
    </>
  );
};

export default List;
