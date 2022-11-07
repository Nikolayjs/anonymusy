import React from 'react';
import Button from './Button';
import { v4 as uuidv4 } from 'uuid';
import { Link } from 'react-router-dom';
import decl from '../../utils/decl';
const Card = ({ avatar, name, surName, age, userId, onChange, url, prof }) => {
  const date = new Date();
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
        <span className="font-normal text-gray-500 dark:text-gray-400 border-b border-blue-100">
          {prof}
        </span>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{`Год рождения: ${age} (${
          date.getFullYear() - age
        } ${decl(date.getFullYear() - age, ['год', 'года', 'лет'])})`}</p>
        <span className="text-md font-bold text-gray-500 dark:text-gray-400">
          Ссылка на портфолио:
          <p className="text-sm font-mono">
            <a href={url}>{url}</a>
          </p>
        </span>
        <div className="flex justify-between mt-3">
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
