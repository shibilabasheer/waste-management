import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter , RouterProvider} from "react-router-dom";
import Layout from './components/Layout.jsx';
import ErrorPage from './pages/ErrorPage.jsx';
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import User from './pages/User.jsx';
import UserDetails from './pages/UserDetails.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout/>,
    errorElement : <ErrorPage/>,
     children : [
      {
        index : true,
        element : <Home/>
      },
      {
        path : 'about',
        element : <About/>
      },
      {
        path : 'users',
        element : <User/>
      },
      {
        path : 'users/:id',
        element : <UserDetails/>
      }
    ]
   
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
