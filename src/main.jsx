import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import AddCloth from './Components/AddCloth.jsx';
import UpdateCloth from './Components/UpdateCloth.jsx';
import SignIn from './Components/SignIn.jsx';
import SignUp from './Components/SignUp.jsx';
import Layout from './Components/Layout.jsx';
import AuthProvider from './Components/Firebase/AuthProvider.jsx';
import Users from './Components/Users.jsx';
const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout></Layout>,
    children: [
      {
        path: "/",
        element: <App></App>,
        loader: ()=> fetch('http://localhost:5000/cloth')
      },
      {
        path: '/addCloth',
        element: <AddCloth></AddCloth>
      },
      {
        path: '/updateCloth/:id',
        element: <UpdateCloth></UpdateCloth>,
        loader: ({params})=> fetch(`http://localhost:5000/cloth/${params.id}`)
      },
      {
        path: 'signIn',
        element:<SignIn></SignIn>
      },
      {
        path: 'signUp',
        element: <SignUp></SignUp>
      },
      {
        path: 'users',
        element: <Users></Users>,
        loader: ()=> fetch('http://localhost:5000/users')
      }
    ]
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
    <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>,
)
