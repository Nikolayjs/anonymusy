import React from 'react';

const Input = ({ title, inputId, place, value, onChange, errors, type }) => {
  // console.log(errors);
  return (
    <div>
      <label
        htmlFor={inputId}
        className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
      >
        {title}
      </label>
      <input
        type={type ? type : 'text'}
        name={inputId}
        id={inputId}
        value={value}
        className={
          errors
            ? 'bg-red-50 border border-red-500 text-red-900 placeholder-red-700 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block w-full p-2.5 dark:bg-red-100 dark:border-red-400'
            : 'bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white'
        }
        placeholder={place}
        onChange={onChange}
      />
    </div>
  );
};

export default Input;
