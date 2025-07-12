import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import App from './App.jsx';
import './index.css';
import Layout from './Layout.jsx';
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import Explore from './pages/Explore.jsx';
import Events from './pages/Events.jsx';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path =  "/" element={<Layout/>}>
      <Route path = "/about" element ={<About/>}/>


      <Route path = "/explore" element ={<Explore/>}/>
      <Route path = "/events" element ={<Events/>}/>
      <Route path = "/" element ={<Home/>}/>
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <App />
      <RouterProvider router={router}/>
  </React.StrictMode>
);