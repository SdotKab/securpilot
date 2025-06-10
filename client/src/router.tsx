import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import Home from './pages/Home';
import Questionnaire from './pages/Questionnaire';
import Report from './pages/Report';
import NotFound from './pages/NotFound';

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout><Home /></MainLayout>,
  },
  {
    path: '/questionnaire',
    element: <MainLayout><Questionnaire /></MainLayout>,
  },
  {
    path: '/report',
    element: <MainLayout><Report /></MainLayout>,
  },
  {
    path: '*',
    element: <MainLayout><NotFound /></MainLayout>,
  },
]);

export default function AppRouter() {
  return <RouterProvider router={router} />;
}
