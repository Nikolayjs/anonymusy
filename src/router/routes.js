import Home from '../components/layouts/Home';
import Users from '../components/layouts/Users';

export const routes = [
  { path: '/', component: Home, exact: true, name: 'Главная', url: '/' },
  {
    path: '/users/:userId?',
    component: Users,
    exact: true,
    name: 'Список студентов',
    url: '/users/',
  },
  //   { path: '/user/:userId?/edit', component: UserEdit, exact: true },
];
