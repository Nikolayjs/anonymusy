import React, { useState } from 'react';
import decl from '../../utils/decl';
import Modal from './Modal';

const UserProfileCard = ({ name, surName, avatar, prof, age, onChange, url, userId }) => {
  const date = new Date();
  const [modal, setModal] = useState('hidden');
  const handleModal = (mode) => {
    setModal(mode);
  };
  return (
    <>
      <div className="w-full max-w-3xl bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
        <div className="flex flex-col items-center pb-10">
          <img
            className="mb-3 w-48 h-48 rounded-full shadow-lg mt-5"
            src={avatar}
            alt={`${name} ${surName} avatar`}
          />
          <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">
            {name} {surName}
          </h5>
          <span className="text-sm text-gray-500 dark:text-gray-400">{prof}</span>
          <span className="text-sm font-bold text-gray-500 dark:text-gray-400">
            Год рождения:{' '}
            {`${age} (${date.getFullYear() - age} ${decl(date.getFullYear() - age, [
              'год',
              'года',
              'лет',
            ])})`}
          </span>
          <span className="text-sm font-bold text-gray-500 dark:text-gray-400">
            Ссылка на портфолио:
            <p>
              <a href={url}>{url}</a>
            </p>
          </span>
          <div className="flex mt-4 space-x-3 md:mt-6">
            <button
              onClick={onChange}
              className="inline-flex items-center py-2 px-4 text-sm font-medium text-center text-gray-900 bg-white rounded-lg border border-gray-300 hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-700 dark:focus:ring-gray-700"
            >
              Назад
            </button>
            <button
              onClick={() => handleModal('')}
              className="inline-flex items-center py-2 px-4 text-sm font-medium text-center text-gray-900 bg-white rounded-lg border border-gray-300 hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-700 dark:focus:ring-gray-700"
            >
              Редактировать
            </button>
          </div>
        </div>
      </div>
      <Modal modal={modal} onChange={handleModal} userId={userId} />
    </>
  );
};

export default UserProfileCard;
