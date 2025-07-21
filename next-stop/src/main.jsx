import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import App from './App.jsx';
// import './index.css';
// import Layout from './Layout.jsx';
// import Home from './pages/Home.jsx';
// import About from './pages/About.jsx';
// import Explore from './pages/Explore.jsx';
// import Events from './pages/Events.jsx';
// import CityDetail from './components/explore/CityDetail.jsx';
// import ThingsToDo from './components/explore/InnerPages/ThingsToDo.jsx';
// import PlacesToGo from './components/explore/InnerPages/PlacesToGo.jsx';
// import PlanYourTrip from './components/explore/InnerPages/PlanYourTrip.jsx';

// import BucketListPage from './components/explore/InnerPages/BucketListPage.jsx';
// import Visited from './components/explore/InnerPages/Visited.jsx';
// import { TravelProvider } from './TravelContext/TravelContext.jsx';


// const router = createBrowserRouter(
//   createRoutesFromElements(
//     <Route path="/" element={<Layout />}>
//       <Route index element={<Home />} />
//       <Route path="/about" element={<About />} />
//       <Route path="/explore" element={<Explore />} />
//       <Route path="/events" element={<Events />} />
//       <Route path="/explore/:cityName" element={<CityDetail />} />
//       <Route path="/explore/:cityName/things-to-do" element={<ThingsToDo />} />
//       <Route path="/explore/:cityName/places-to-go" element={<PlacesToGo />} />
//       <Route path="/explore/:cityName/plan-your-trip" element={<PlanYourTrip />} />
//       <Route path="/bucketlist" element={<BucketListPage />} />
//       <Route path="/visited" element={<Visited />} />
//     </Route>
//   )
// );

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
<App/>
    {/* <TravelProvider>
      <RouterProvider router={router}/>
    </TravelProvider> */}

  </React.StrictMode>
);