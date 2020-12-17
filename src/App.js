import React from 'react';
import './App.css';
import Home from './components/Home/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Login from './components/Login/Login';
import NotFound from './components/NotFound/NotFound';
import Destination from './components/Destination/Destination';
import Booking from './components/Booking/Booking';
import News from './components/News/News';
import Blog from './components/Blog/Blog';
import Contacts from './components/Contacts/Contacts';
import { createContext, useState } from 'react';
import PrivateRoute from './components/privateRoute/privateRoute';
import HotelDetails from './components/HotelDetails/HotelDetails';


export const UserContext=createContext();

function App() {
  const [loggedInUser,setLoggedInUser]=useState({})
  return (
    <UserContext.Provider value={[loggedInUser,setLoggedInUser]}>
      <div className='cover'>
        <Router>
          <Switch>
            <Route path="/home">
              <Home/>
            </Route>
            <Route path="/news">
              <News/>
            </Route>
            <Route path="/destination">
              <Destination/>
            </Route>
            <Route path="/blog">
              <Blog/>
            </Route>
            <Route path="/contacts">
              <Contacts/>
            </Route>          
            <PrivateRoute path="/HotelDetails/:id">
              <HotelDetails/>
            </PrivateRoute>
            <Route path="/login">
              <Login/>
            </Route>
            <Route exact path="/">
              <Home/>
            </Route>
            <Route path="/booking/:place">
              <Booking/>
            </Route>
            <Route path="*">
              <NotFound/>
            </Route>
          </Switch>
        </Router>
      </div>
    </UserContext.Provider>
  );
}

export default App;
