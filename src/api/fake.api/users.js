const users = [
  {
    id: '1',
    firstName: 'Коломбо',
    secondName: 'Смакямба',
    age: 1991,
    url: 'https://github.com/maddytady',
    prof: 'FronEnd Dev',
    avatar:
      'https://sun9-east.userapi.com/sun9-21/s/v1/ig2/esyHImWYOi1KpphHS7hhJy09tKQlxxH-Fq6PWckhNpG9pq-AQRisQbD_UGUi80BetmWTmZp4uOutXLwcyFAYvNqp.jpg?size=540x360&quality=96&type=album',
  },
  {
    id: '2',
    firstName: 'Кэти',
    secondName: 'Перри',
    age: 1984,
    url: 'https://github.com/maddytady',
    prof: 'Певица ртом',
    avatar:
      'https://sun9-west.userapi.com/sun9-47/s/v1/ig2/Xg8tv0sQOJJhvxzQ4thb8oq4Hks39966iDIvKBZb1LsYXPyIRCsvahrCWEYrKjO59DiLSe9-8bxwicI5JZ6e6pO6.jpg?size=1080x830&quality=96&type=album',
  },
  {
    id: '3',
    firstName: 'Адриано',
    secondName: 'Челентано',
    age: 1938,
    url: 'https://github.com/maddytady',
    prof: 'Красавчик',
    avatar:
      'https://sun9-north.userapi.com/sun9-82/s/v1/ig2/zl1QopldOB3u3xpAKjd2tztu_p01EK3Fc_0T7-CdA8Y-pVjxbtIfeEt-snaiFstEeVDcimQn-K6WdAPwXZAQTu0U.jpg?size=960x720&quality=96&type=album',
  },
  {
    id: '4',
    firstName: 'Орландо',
    secondName: 'Блум',
    age: 1977,
    url: 'https://github.com/maddytady',
    prof: 'Тоже красавчик, но не на столько',
    avatar:
      'https://sun9-west.userapi.com/sun9-13/s/v1/ig2/tI-Zxm1zzgwGKeNZpFRGQIP89W5BYMgJnzsgMximoF_MZ3zlsCGsN2SZV6FRjuJJYgyFUJh66OrNQZLIKr1GG1Zm.jpg?size=1080x674&quality=96&type=album',
  },
];

if (!localStorage.getItem('users')) {
  localStorage.setItem('users', JSON.stringify(users));
}

const fetchAll = () =>
  new Promise((resolve) => {
    window.setTimeout(function () {
      resolve(JSON.parse(localStorage.getItem('users')));
    }, 200);
  });

const update = (id, data) =>
  new Promise((resolve) => {
    const users = JSON.parse(localStorage.getItem('users'));
    const userIndex = users.findIndex((u) => u.id === id);
    users[userIndex] = { ...users[userIndex], ...data };
    localStorage.setItem('users', JSON.stringify(users));
    resolve(users[userIndex]);
  });
const getById = (id) =>
  new Promise((resolve) => {
    window.setTimeout(function () {
      resolve(JSON.parse(localStorage.getItem('users')).find((user) => user.id === id));
    }, 200);
  });

const methods = {
  fetchAll,
  getById,
  update,
};
export default methods;
