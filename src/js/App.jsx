import  { lazy, Suspense }  from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
//css
import '../css/App.css';

import Layout from "./Layout";

const Dashboard = lazy(() => import('./pages/DashboardPage/Dashboard'));

const  App = () => {

  const routes = [
    //Dashboard page
    { path: "/", element:<Layout><Dashboard/></Layout>},
  ]

  return (
      <Suspense >
        <BrowserRouter>
            <Routes>
                {routes.map((route, i) => (
                  <Route key={i} path={route.path} element={ route.element } />
                ))}
            </Routes>
        </BrowserRouter>
      </Suspense>
  );
}

export default App;