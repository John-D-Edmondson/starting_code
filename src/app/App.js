import React from "react";
import About from "../components/About";
import SignUp from "../components/SignUp";
import Articles from "../components/Articles";
import Article from "../components/Article";
import Categories from "../components/Categories";
import Category from "../components/Category";
import Author from "../components/Author";
import Profile from "../components/Profile";
import EditProfileForm from "../components/EditProfileForm";
import Root from "../components/Root";

import { RouteProvider, Route, createBrowserRouter, createRoutesFromElements, RouterProvider, Router } from 'react-router-dom';

import "./App.css";

const appRouter = createBrowserRouter(createRoutesFromElements(
  <Route path='/' element={ <Root/> }>  {/* parent route */ }
    <Route path='about' element={ <About/> }/> {/* child route with path relative to parent ('/') */}
    <Route path="sign-up" element={<SignUp/>}/>
    <Route path="articles" element={<Articles/>}/>
    <Route path="articles/:title" element={<Article/>}/>
    <Route path="categories" element={<Categories/>}>
      <Route path=":name" element={<Category/>}/>
    </Route>
    <Route path="profile" element={<Profile/>}>
      <Route path="edit" element={<EditProfileForm/>}/>
    </Route>
    <Route path="authors/:name" element={<Author/>}/>

  </Route>
));


function App() {
  return (
      <RouterProvider router={appRouter} />
  );
}

export default App;
 