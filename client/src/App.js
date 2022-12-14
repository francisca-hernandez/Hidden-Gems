import React from 'react';
//import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

//Apollo Provider
import {
  ApolloProvider, ApolloClient, InMemoryCache, createHttpLink
} from '@apollo/client';

//import { setContext } from '@apollo/client';
// import logo from './logo.svg';

import './App.css';

//Components
import Navbar from './components/Navbar';
import Footer from './components/Footer';

//Pages
//import Login from './pages/Login';
//import Signup from './pages/Signup';
//import About from './pages/About';
//import Contact from './pages/Contact';


const httpLink = createHttpLink({
  uri: '/graphql',
});

const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
});

function App() {
  return (

    <ApolloProvider client={client}>

      <div>

        <Navbar></Navbar>

        <main>

        </main>

        <Footer />

      </div>


    </ApolloProvider>


  );
}

export default App;

