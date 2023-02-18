import Detail from '../views/pages/detail';
import Favorite from '../views/pages/favourite';
import HomePage from '../views/pages/homepage';

const routes = {
  '/': HomePage,
  '/detail/:id': Detail,
  '/favorite': Favorite,
};

export default routes;
