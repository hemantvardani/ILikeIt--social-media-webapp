import axios from 'axios';

const API =axios.create({baseURL : 'http://localhost:5000'});


API.interceptors.request.use((req)=>{

    if(localStorage.getItem('profile')){
        req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem('profile')).token}`; //check here
    }

    return req;
});

export const fetchPosts = () => API.get('/posts');
export const createPost = (newPost) => API.post('/posts', newPost);
export const likePost = (id) => API.patch(`/posts/${id}/likePost`);
export const updatePost = (id, updatedPost) => API.patch(`/posts/${id}`, updatedPost);
export const deletePost = (id) => API.delete(`/posts/${id}`);

export const signIn =(formData) => API.post('/user/signin',formData); //check or signin
export const signUp =(formData) => API.post('/user/signup',formData); //check or signin




//notes
	
// what is http request ? 
//                     HTTP stands for Hyper Text Transfer Protocol

//                     WWW is about communication between web clients and servers

//                     Communication between client computers and web servers is done by sending HTTP Requests and receiving HTTP Responses

//                     Communication between clients and servers is done by requests and responses:

//                      An HTTP request is made by a client, to a named host, which is located on a server. The aim of the request is to access a resource on the server.

//                     process-:   A client (a browser) sends an HTTP request to the web
//                                 A web server receives the request
//                                 The server runs an application to process the request
//                                 The server returns an HTTP response (output) to the browser
//                                 The client (the browser) receives the response




// what is  XHR - XML Http Request ?
//                 All browsers have a built-in XMLHttpRequest Object (XHR).

//                 XHR is a JavaScript object that is used to transfer data between a web browser and a web server.

//                 XHR is often used to request and receive data for the purpose of modifying a web page.

//                 The XHR Object is a Web Developers Dream, because you can:
//                                     Update a web page without reloading the page
//                                     Request data from a server - after the page has loaded
//                                     Receive data from a server - after the page has loaded
//                                     Send data to a server - in the background



// so what is axios ? 
//                 Axios is a promised-based HTTP client for JavaScript. It has the ability to make HTTP requests from the browser and handle the transformation of request and response data.

//One of the fundamental tasks of any web application is to communicate with servers through the HTTP protocol. This can be easily achieved using Fetch or Axios.
//Axios is a Javascript library used to make HTTP requests from node.js or XMLHttpRequests from the browser 

//read - https://www.geeksforgeeks.org/difference-between-fetch-and-axios-js-for-making-http-requests/



// to to get data or send or store data from client to server or vice versa , brower come in between , we use GET to get data form server and POST to send data to server.
