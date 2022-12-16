import React from 'react';
//import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

//Apollo Provider
import {
  ApolloProvider, ApolloClient, InMemoryCache, createHttpLink
} from '@apollo/client';

import { setContext } from '@apollo/client/link/context';
// import logo from './logo.svg';

import './App.css';

//Components
import Navbar from './components/Navbar';
import Footer from './components/Footer';

import Homepage from './pages/homepage';

//Pages
import Login from './pages/Login';
import Gemsform from './pages/Gemsform'; 


//import Signup from './pages/Signup';
//import About from './pages/About';
//import Contact from './pages/Contact';


const httpLink = createHttpLink({
  uri: 'http://localhost:3001/graphql',
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('id_token');
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  return (

    <ApolloProvider client={client}>

      <div>

        <Navbar></Navbar>

        <main>
          <Homepage></Homepage>
          <Login></Login>
          
        </main>
        <section>
          <Gemsform></Gemsform>
        </section>

        <Footer />

      </div>


    </ApolloProvider>


  );
}

export default App;

