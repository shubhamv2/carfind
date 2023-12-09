import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import {Cart,Container} from './components'
import About from './components/About.jsx';
import ProductPage from './components/ProductPage.jsx';
import Services from './components/Services.jsx';
import Contact from './components/Contact.jsx';
const router = createBrowserRouter([
  {
    path:'/',
    element:<App/>,
    children:[
      {
        path:'',
        element:<Container/>
      },
      {
        path:'cart',
        element:<Cart/>
      },
      {
        path:'about',
        element:<About/>
      },
      {
        path:'product/:productId',
        element:<ProductPage/>
      },
      {
        path:"services",
        element:<Services/>
      },
      {
        path:"contact",
        element:<Contact/>
      }
    ]
  }
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
