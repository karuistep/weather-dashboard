import { createBrowserRouter } from 'react-router-dom';
import Layout from '../components/layout/Layout';
import Home from '../pages/Home/Home';
import SearchResult from '../pages/SearchResult/SearchResult';
import NotFound from '../pages/NotFound';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: 'search', element: <SearchResult /> },
      { path: '*', element: <NotFound /> },
    ],
  },
]);
