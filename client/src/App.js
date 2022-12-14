import React from 'react'
// import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'

//Apollo Provider
import {
  ApolloProvider,
  ApolloClient,
  InMemoryCache,
  createHttpLink,
} from '@apollo/client'
import { setContext } from '@apollo/client/link/context'

// CSS 
import './App.css'

//Components
import Navbar from './components/Navbar'
import Footer from './components/Footer'

//Pages
import Login from './pages/Login'
import Dashboard from './pages/Dashboard'
import Homepage from './pages/Homepage'
// Utils 
import Auth from './utils/auth'

const httpLink = createHttpLink({
  uri: '/graphql',
})

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('id_token')
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  }
})

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
})

function App() {
  return (
    <ApolloProvider client={client}>
      <div className="paddingfix">
        <Navbar className="ms-auto" />

        {Auth.loggedIn() ? (
          <>
            <section>
              <Dashboard></Dashboard>
            </section>
          </>
        ) : (
          <>
            <main>
              <Homepage></Homepage>
              <section>
                <Login></Login>
              </section>
            </main>
          </>
        )}
      </div>
      <div>
        <Footer />
      </div>
    </ApolloProvider>
  )
}

export default App
