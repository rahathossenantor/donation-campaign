import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom'
import './index.css'
import NotFoundPage from './components/NotFoundPage/NotFoundPage.jsx'
import Donation from './components/Donation/Donation.jsx'
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
        path: '/donation',
        element: <Donation></Donation>
      },
      {
        path: '/statistics',
        element: <Statistics></Statistics>
      },
      {
        path: '/donation-details/:id',
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
