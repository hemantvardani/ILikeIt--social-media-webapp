

import React, { useState, useEffect } from 'react';
import { Container, AppBar, Typography, Grow, Grid } from '@material-ui/core';
import { useDispatch } from 'react-redux';// react hook
import { getPosts } from './actions/posts';
import Posts from './components/Posts/Posts';
import Form from './components/Form/Form';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import memories from './images/memories.png'


import useStyles from './styles';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import Auth from './components/Auth/Auth';

const App = () => (
   <BrowserRouter>
        <Container maxWidth="lg" >
          <Navbar />
          {/* <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br> */}
         <Switch>
          <Route path="/" exact component={Home}  />
          <Route path ="/auth" exact component={Auth}/>
         </Switch>
          
        </Container>
 </BrowserRouter>
);
export default App;

//4:06:00