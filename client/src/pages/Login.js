import React, { useState } from 'react'
import { useMutation } from '@apollo/client'
import { LOGIN_USER } from '../utils/mutation'

import Auth from '../utils/auth'
import Footer from '../components/Footer'
import SignUp from './SignUp'

import { Form, FormGroup, Label, Input, Button, Col, Row } from 'reactstrap'

const Login = (props) => {
  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
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
        <div style={{
              marginLeft: '10px',
              marginTop: '20px',
          }}>
          <h4>Login</h4>
          <div>
            <Form onSubmit={handleFormSubmit}>
              <Row className="row-cols-lg-auto g-3 align-items-center">
                <Col>
                  <Label className="visually-hidden" for="email">
                    Email
                  </Label>
                  <Input
                    placeholder="Your email"
                    name="email"
                    type="email"
                    id="email"
                    value={formState.email}
                    onChange={handleChange}
                  />
                </Col>
                <Col>
                  <Label className="visually-hidden" for="password">
                    Password
                  </Label>
                  <Input
                    placeholder="******"
                    name="password"
                    type="password"
                    id="password"
                    value={formState.password}
                    onChange={handleChange}
                  />
                </Col>
                <Col>
                  <FormGroup check>
                    <Input
                      id="exampleCheckbox"
                      name="checkbox"
                      type="checkbox"
                    />
                    <Label check for="exampleCheckbox">
                      Remember Me
                    </Label>
                  </FormGroup>
                </Col>
                <Col>
                  <Button type="button" onClick={handleFormSubmit} style={{
                    fontWeight: 'bold',
                  }}>
                    Submit
                  </Button>
                </Col>
              </Row>
            </Form>

            {error && <div>Login failed</div>}

            {Auth.loggedIn() ? (
              <>
                <h1>Logged in</h1>
                <Button Click={logout} style={{
                  fontWeight: 'bold',                
                  }} type='submit'>
                  Logout
                </Button>
              </>
            ) : (
              <>
                <p>Not Logged-In</p>
              </>
            )}
          </div>
        </div>
        <div>
          <SignUp />
        </div>
      </div>
      <Footer />
    </main>
  )
}

export default Login
