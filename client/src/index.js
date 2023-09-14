import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import { Provider } from 'react-redux';
import { legacy_createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

import  reducers  from './reducers';
//or
// import  reducers  from './reducers/index';
import App from './App';
import './index.css';
import { notStrictEqual } from 'assert';


const store = legacy_createStore(reducers, compose(applyMiddleware(thunk)));

ReactDOM.render( 
    <Provider store ={store}>
        <App/>
    </Provider>,
     document.getElementById('root'));





// notes
// 


// React is a free and open-source front-end JavaScript library for building user interfaces based on UI components


// React's goal is in many ways to render HTML in a web page.
// React renders HTML to the web page by using a function called ReactDOM.render().



// this language is javascript ( not html)

// The ReactDOM.render() function takes two arguments, HTML code(this html code in javascript is written using jsx. JSX which allows you to write HTML tags inside the JavaScript code ) and an HTML element.

// The purpose of the function is to display the specified HTML code inside the specified HTML element.


// But render where?
// There is another folder in the root directory of your React project, named "public". In this folder, there is an index.html file.


// it is not necessary that rendering is done in div element only or by root id only , we can change both 

// 
// 
// 
// this <App/> , this App is a component , not fuction , as it is returning a html code.
// 
// 
// to  render using react have 2 ways ->

    //  1  ReactDOM.render(  <App/>, document.getElementById('root'));
      
    //  2  const root = ReactDOM.createRoot(document.getElementById('root'));
    //      root.render(<Car />);

// 
// 
// 
// provider is used to tell that use this store
// 
// 
