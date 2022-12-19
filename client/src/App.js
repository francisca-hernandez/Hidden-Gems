import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

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
import AddGem from './components/AddGem';
// import DeleteGem from './components/DeleteGem';
import Gems from './components/Gems'
import SignUp from './components/SignUp';

//Pages
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import Homepage from './pages/Homepage';


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
      <Router>
      <div>
      <Navbar />
      </div>
         <Routes>

          <div>
          <Route path="/Homepage" element={<Homepage />} />
          {/* links to about us - mission statement - links to github/contact form */}
          </div>

          <div>
          <Route path="/Login" element={<Login />} />
          {/* login and signUp */}

          <Route 
                path="/SignUp" 
                element={<SignUp />} 
              />
          </div>

          <div>
          <Route path="/Dashboard" element={<Dashboard/>}> 

          </Route>
          {/* Create, Save, delete gem */}
          
          <Route 
                path="/Gems/:id" 
                element={<Gems />} 
              />
           <Route 
                path="/AddGem" 
                element={<AddGem />} 
              />
          </div>

        </Routes>
      <div>
      <Footer />
      </div>
      </Router>
    </ApolloProvider>


  );
}

export default App;

