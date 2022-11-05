import Input from './Input';
import React, { useEffect, useState } from 'react';
import api from '../../api';
import Loader from './Loader';
import { useHistory } from 'react-router-dom';
import { validator } from '../../utils/validator';

const Modal = ({ modal, onChange, userId }) => {
  const [data, setData] = useState({
    age: '',
  });
  const [errors, setErrors] = useState({});
  const history = useHistory();
  const [user, setUser] = useState();

  const handleUpdate = (e) => {
    e.preventDefault();

    const updatedUser = {
      ...user,
    };
    history.push(`/`);
    api.users.update(userId, updatedUser).then(() => history.push(`/users/${userId}`));
    onChange('hidden');
  };

  const handleSubmit = () => {
    const isValid = validate();
    if (!isValid) return;
  };

  useEffect(() => {
    api.users.getById(userId).then((data) => setUser(data));
  }, []);

  const validatorConfig = {
    age: {
      isCorrectAge: {
        message: 'Возраст введён некорректно',
      },
    },
  };

  useEffect(() => {
    validate();
  }, [data]);

  const validate = () => {
    const errors = validator(data, validatorConfig);
    setErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const isValid = Object.keys(errors).length === 0;

  const handleChange = (e, id) => {
    setData((prevState) => ({
      ...prevState,
      [id]: e.target.value,
    }));
    setUser({ ...user, [id]: e.target.value });
  };

  if (user) {
    return (
      <div
        id="authentication-modal"
        tabIndex="-1"
        aria-hidden="true"
        className={`${modal} overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-modal md:h-full flex`}
      >
        <div className="relative p-4 w-full max-w-md h-full md:h-auto ml-">
          <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
            <button
              type="button"
              onClick={() => onChange('hidden')}
              className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white"
              data-modal-toggle="authentication-modal"
            >
              <svg
                aria-hidden="true"
                className="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clipRule="evenodd"
                ></path>
              </svg>
              <span className="sr-only">Закрыть</span>
            </button>
            <div className="py-6 px-6 lg:px-8">
              <h3 className="mb-4 text-xl font-medium text-gray-900 dark:text-white">
                Редактировать данные
              </h3>
              <form onSubmit={handleUpdate}>
                <div className="space-y-6" action="#">
                  <Input
                    title="Имя"
                    inputId="firstName"
                    place={user.firstName}
                    value={user.firstName}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                    isRequired={false}
                    errors={errors.message}
                    onChange={(e) => handleChange(e, e.target.id)}
                  />
                  <Input
                    title="Фамилия"
                    inputId="secondName"
                    place={user.secondName}
                    value={user.secondName}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                    isRequired={false}
                    errors={errors.message}
                    onChange={(e) => handleChange(e, e.target.id)}
                  />
                  <Input
                    title="Профессия"
                    inputId="prof"
                    place={user.prof}
                    value={user.prof}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                    isRequired={false}
                    errors={errors.message}
                    onChange={(e) => handleChange(e, e.target.id)}
                  />

                  {!isValid ? (
                    <Input
                      title="Год рождения"
                      inputId="age"
                      place={user.age}
                      value={user.age}
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                      isRequired={false}
                      errors={errors.message}
                      onChange={(e) => handleChange(e, e.target.id)}
                    />
                  ) : (
                    <Input
                      title="Год рождения введён некорректно"
                      inputId="age"
                      place={user.age}
                      value={user.age}
                      className="bg-red-50 border border-red-500 text-red-900 placeholder-red-700 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block w-full p-2.5 dark:bg-red-100 dark:border-red-400"
                      isRequired={false}
                      errors={errors.message}
                      onChange={(e) => handleChange(e, e.target.id)}
                    />
                  )}

                  <Input
                    title="Аватар"
                    inputId="avatar"
                    place={user.avatar}
                    value={user.avatar}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                    isRequired={false}
                    errors={errors.message}
                    onChange={(e) => handleChange(e, e.target.id)}
                  />

                  <button
                    type="submit"
                    onClick={handleSubmit}
                    disabled={isValid}
                    className="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  >
                    Обновить
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
  return <Loader />;
};

export default Modal;
