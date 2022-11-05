import React from 'react';

const Input = ({ title, inputId, place, isRequired, value, onChange, error, className }) => {
  return (
    <div>
      <label
        htmlFor={inputId}
        className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
      >
        {title}
      </label>
      <input
        type="text"
        name={inputId}
        id={inputId}
        value={value}
        className={
          className
            ? className
            : 'bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white'
        }
        placeholder={place}
        required={isRequired}
        onChange={onChange}
      />
    </div>
  );
};

export default Input;
