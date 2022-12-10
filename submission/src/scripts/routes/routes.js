import Detail from '../views/pages/detailpage';
import HomePage from '../views/pages/homepage';
import FavoritePage from '../views/pages/favoritepage';

const routes = {
  '/': HomePage, // default page
  '/homepage': HomePage,
  '/favorite': FavoritePage,
  '/detail/:id': Detail,
};

export default routes;
