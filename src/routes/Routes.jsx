import { createBrowserRouter } from "react-router";
import MainLayout from "../layout/MainLayout";
import Friends from "../Pages/friendsDetails/FriendsDetails";
import HomePage from "../Pages/homepage/HomePage";
import ErrorPage from "../Pages/errorpage/ErrorPage";


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
      path: 'friends',
      element: <Friends />
    }
  ],
  errorElement: <ErrorPage />
}
]);