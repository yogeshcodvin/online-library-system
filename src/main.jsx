import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Provider } from "react-redux";
import { appStore } from "./utils/appStore.js";

import App from './App.jsx'
import HomePage from './components/HomePage.jsx'
import BrowseBooksPage from './components/BrowseBooksPage.jsx'
import BrowseDetailsPage from './components/BrowseDetailsPage.jsx'
import AddBookPage from './components/AddBookPage.jsx'
import NotFoundPage from './components/NotFooundPage.jsx'
import { books } from './utils/mockdata.js'


import {createBrowserRouter, RouterProvider} from 'react-router-dom';

const appRouter = createBrowserRouter(
  [
    {
      path : "/",
      element : <App/>,
      errorElement : <NotFoundPage/>,
      children : [{
        path : "/",
        element : <HomePage books = {books}/>
      },
      {
        path : "/browse/:category",
        element : <BrowseBooksPage/>
      },
      {
        path : "/browse",
        element : <BrowseBooksPage/>
      },
      {
        path : "/book/:id",
        element : <BrowseDetailsPage/>
      },
      {
        path : "/add",
        element : <AddBookPage/>
      },
      {
        path : "/notfoundpage",
        element : <NotFoundPage/>
      }]
    },
    {
      path: "*", // This will catch all undefined routes
      element: <NotFoundPage/>,
    },
    
  ]
)
export default appRouter;

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={appStore}>
    <RouterProvider router = {appRouter}/>
    </Provider>
  </StrictMode>
);
