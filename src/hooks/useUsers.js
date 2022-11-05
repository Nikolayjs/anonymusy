import { useMemo } from 'react';

export const useSortedUsers = (users, sort) => {
  const sorterUsers = useMemo(() => {
    if (sort) {
      return [...users].sort((a, b) => a[sort].localeCompare(b[sort]));
    }
    return users;
  }, [sort, users]);
  return sorterUsers;
};

export const useUsers = (users, sort, query) => {
  const sortedUsers = useSortedUsers(users, sort);
  const sortedAndSearchedUsers = useMemo(() => {
    return sortedUsers.filter(
      (user) =>
        user.firstName.toLowerCase().includes(query.toLowerCase()) ||
        user.secondName.toLowerCase().includes(query.toLowerCase())
    );
  }, [query, sortedUsers]);
  return sortedAndSearchedUsers;
};
