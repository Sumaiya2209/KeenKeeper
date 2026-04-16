import { createBrowserRouter } from "react-router";
import MainLayout from "../layout/MainLayout";
import FriendsDetails from "../Pages/friendsDetails/FriendsDetails";
import HomePage from "../Pages/homepage/HomePage";
import ErrorPage from "../Pages/errorpage/ErrorPage";
import Timeline from "../Pages/timeline/Timeline";
import Stats from "../Pages/stats/Stats";


export const router = createBrowserRouter([
{
  path: '/',
  element: <MainLayout />,
  children: [
    {
      index: true,
      element: <HomePage />
    },
    {
      path: 'friendsDetails/:friendId',
      element: <FriendsDetails />,
      loader: () => fetch('./data.json')
    },
    {
      path: 'timeline',
      element: <Timeline />
    },
    {
      path: 'stats',
      element: <Stats />
    }
  ],
  errorElement: <ErrorPage />
}
]);