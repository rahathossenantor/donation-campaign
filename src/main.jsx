import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom'
import './index.css'
import NotFoundPage from './components/NotFoundPage/NotFoundPage.jsx'
import Donations from './components/Donations/Donations.jsx'
import Statistics from './components/Statistics/Statistics.jsx'
import Home from './components/Home/Home.jsx'
import DonationDetails from './components/DonationDetails/DonationDetails.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App/>,
    errorElement: <NotFoundPage></NotFoundPage>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/donations',
        element: <Donations></Donations>
      },
      {
        path: '/statistics',
        element: <Statistics></Statistics>
      },
      {
        path: '/donation/:id',
        element: <DonationDetails></DonationDetails>,
        loader: () => fetch("https://raw.githubusercontent.com/rahathossenantor/fun-with-api/main/donations.json")
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
