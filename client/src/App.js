import React from 'react';
//import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

//Apollo Provider
import {
  ApolloProvider, 
  ApolloClient, 
  InMemoryCache, 
  createHttpLink
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
// import logo from './logo.svg';

import './App.css';
//Components
import Navbar from './components/Navbar';
import Footer from './components/Footer';

//Pages
import Login from './pages/Login';
import Gemsform from './pages/Gemsform'; 
import Signup from './pages/CreateUser';
import Dashboard from './pages/Dashboard';
import { Router } from 'express';
import CreateUser from './pages/CreateUser';


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
      <Router>
          <Navbar />

        <Routes>
          <Route
          path="/"
          element={<Homepage />}
          />

           <Route
          path="/"
          element={<Login />}
          />
           <Route
          path="/"
          element={<CreateUser />}
          />

          <Route path="/Dashboard">
            <Route path= ":username" element={<Dashboard />} />
            <Route path="" element={<Dashboard />} />
          </Route>

          <Route 
                path="/saveGem/:id" 
                element={<Gemsform />} 
              />

        </Routes>
        <div>
          <Footer />
        </div>
      </Router>
    </ApolloProvider>
  );
}







//       <div>

//         <Navbar></Navbar>

//         <main>
//           <Homepage></Homepage>
//           <Login></Login>
          
//         </main>
//         <section>
//           <Gemsform></Gemsform>
//           <Dashboard></Dashboard>
//         </section>

//         <Footer />

//       </div>


//     </ApolloProvider>


//   );
// }

export default App;

