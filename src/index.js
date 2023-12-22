import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider, createRoutesFromElements } from 'react-router-dom';
import App from './App';
import Home from './pages/Home'
import About from './pages/About'
import Work from './pages/Works'
import reportWebVitals from './reportWebVitals';

//const router = createBrowserRouter([
 // createRoutesFromElements(
  //  <Route path='/' element={<App />}>
   //   <Route path='' element={<Home />}/>
   //   <Route path='about/' element={<About />}>
   //     <Route path='' element={<Work />}/>
   //   </Route>
  //  </Route>
 // )
//])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
