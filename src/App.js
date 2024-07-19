  import React from 'react';
  import './App.css';
  import { RouterProvider } from 'react-router-dom';
  import router from './routers';
  import 'react-toastify/ReactToastify.css'
  import { ToastContainer } from 'react-toastify';

  function App() {
    return (
      <>
          <ToastContainer />
          <RouterProvider router={router} />
      </>
    )
  }
  export default App;
