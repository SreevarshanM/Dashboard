import { useRoutes } from 'react-router-dom';

// project import
import MainRoutes from './MainRoutes';
import QueryRoutes from './QueryRoute';

// ==============================|| ROUTING RENDER ||============================== //

export default function ThemeRoutes() {
  return useRoutes([MainRoutes, QueryRoutes]);
}
