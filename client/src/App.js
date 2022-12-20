import React from 'react'
// import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'

//Apollo Provider
import {
  ApolloProvider,
  ApolloClient,
  InMemoryCache,
  createHttpLink,
} from '@apollo/client'

import { setContext } from '@apollo/client/link/context';
// import logo from './logo.svg';

import './App.css';

//Components
import Navbar from './components/Navbar';
import Footer from './components/Footer';
// import DeleteGem from './components/DeleteGem';
// import Gems from './components/Gems';

//Pages
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import Homepage from './pages/Homepage';
// import Gemsform from './pages/Gemsform'
// import SignUp from './pages/SignUp';

//import About from './pages/About';
//import Contact from './pages/Contact';

const httpLink = createHttpLink({
  uri: 'http://localhost:3001/graphql',
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('id_token')
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

        <Navbar />

        <main>
          <Homepage></Homepage>
        </main>

        <section>

        <Login></Login>
        
        </section>

        <section>
          
          <Dashboard></Dashboard>
          {/* <Gemsform></Gemsform> */}

        </section>

        <Footer />

      </div>


    </ApolloProvider>


  );
}

export default App; 