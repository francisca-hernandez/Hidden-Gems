import React, { useState } from 'react'
import { useMutation } from '@apollo/client'
import { LOGIN_USER } from '../utils/mutation'

import Auth from '../utils/auth'
import Footer from '../components/Footer'
import SignUp from './SignUp'

import { Form, FormGroup, Label, Input, Button } from 'reactstrap'

const Login = (props) => {
  const logout = (event) => {
    event.preventDefault()
    Auth.logout()
  }

  const [formState, setFormState] = useState({ email: '', password: '' })
  const [login, { error }] = useMutation(LOGIN_USER)

  // update state based on form input changes
  const handleChange = (event) => {
    const { name, value } = event.target

    setFormState({
      ...formState,
      [name]: value,
    })
  }

  // submit form
  const handleFormSubmit = async (event) => {
    alert('Form submitted')
    event.preventDefault()

    try {
      const { data } = await login({
        variables: { ...formState },
      })

      Auth.login(data.login.token)
      console.log('logged in')
    } catch (e) {
      console.error(e)
    }

    // clear form values
    setFormState({
      email: '',
      password: '',
    })
  }

  return (
    <main>
      <div>
        <div>
          <SignUp />
        </div>
        <div>
          <h4>Login</h4>
          <div>
            <Form onSubmit={handleFormSubmit}>
              <FormGroup>
                <Input style={{
                width: '15%',
              }}
                  placeholder="Your email"
                  name="email"
                  type="email"
                  id="email"
                  value={formState.email}
                  onChange={handleChange}
                />
                <Label for="email" hidden>Email</Label>
              </FormGroup>{' '}
              <FormGroup>
                <Input style={{
                width: '15%',
              }}
                  placeholder="******"
                  name="password"
                  type="password"
                  id="password"
                  value={formState.password}
                  onChange={handleChange}
                />
                <Label for="examplePassword" hidden>Password</Label>
              </FormGroup>{' '}
              <Button type="button" onClick={handleFormSubmit}>
                Submit
              </Button>
            </Form>

            {error && <div>Login failed</div>}

            {Auth.loggedIn() ? (
              <>
                <h1>Logged in</h1>
                <button type="button" onClick={logout}>Logout</button>
              </>
            ) : (
              <>
                <p>Not Logged-In</p>
              </>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </main>
  )
}

export default Login
