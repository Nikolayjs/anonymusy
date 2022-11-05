import React from 'react';

const FilterInput = ({ filter, setFilter }) => {
  return (
    <div>
      <input
        type="text"
        name="search"
        id="search"
        value={filter.query}
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-3/4 p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white mx-auto"
        placeholder="Поиск"
        required={false}
        onChange={(e) => setFilter({ ...filter, query: e.target.value })}
      />
    </div>
  );
};

export default FilterInput;
