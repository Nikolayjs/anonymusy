import React from 'react';
import Button from './Button';
import { v4 as uuidv4 } from 'uuid';
import { Link } from 'react-router-dom';
const Card = ({ avatar, name, surName, age, userId, onChange }) => {
  return (
    <div
      key={uuidv4()}
      className="max-w-lg bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 mt-3 mx-auto"
    >
      <Link to={`/users/${userId}`}>
        <img className="rounded-t-lg" src={avatar} alt={`${name} ${surName} avatar`} />
      </Link>
      <div className="p-5">
        <Link to={`/users/${userId}`}>
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {`${name} ${surName}`}
          </h5>
        </Link>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{age}</p>
        <div className="flex justify-between">
          <Link to={`/users/${userId}`}>
            <Button text="Изменить" />
          </Link>
          <Button text="Удалить" onClick={() => onChange(userId)} />
        </div>
      </div>
    </div>
  );
};

export default Card;
