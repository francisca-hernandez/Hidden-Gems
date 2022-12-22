import React, { useState } from 'react'; 
import { useMutation } from '@apollo/client'; 
import { ADD_USER } from '../utils/mutation'; 
import Auth from '../utils/auth'; 

import { Form, FormGroup, Label, Input, Button } from 'reactstrap'; 

// input for signup form
const SignUp = () => {
  const [formState, setFormState] = useState({
    username: '',
    email: '',
    password: '',
  })
  const [addUser, { error }] = useMutation(ADD_USER)
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
      const { data } = await addUser({
        variables: { ...formState },
      })
      Auth.login(data.addUser.token)
    } catch (e) {
      console.error(e)
    }
  }
  // Styling the signup form
  return (
    <main>
      <div>
        <div
          style={{
            marginLeft: '10px',
            marginTop: '20px',
          }}
        >
          <h4>Sign Up</h4>
          <div>
            <Form onSubmit={handleFormSubmit}>
              <FormGroup>
                <Label for="username" hidden>
                  Username
                </Label>
                <Input
                  style={{
                    width: '40%',
                  }}
                  placeholder="Your username"
                  name="username"
                  type="username"
                  id="username"
                  value={formState.username}
                  onChange={handleChange}
                />
              </FormGroup>{' '}
              <FormGroup>
                <Label for="examplePassword" hidden>
                  Email
                </Label>
                <Input
                  style={{
                    width: '40%',
                  }}
                  placeholder="Your email"
                  name="email"
                  type="email"
                  id="email"
                  value={formState.email}
                  onChange={handleChange}
                />
              </FormGroup>{' '}
              <FormGroup>
                <Label for="password" hidden>
                  Password
                </Label>
                <Input
                  style={{
                    width: '40%',
                  }}
                  placeholder="******"
                  name="password"
                  type="password"
                  id="password"
                  value={formState.password}
                  onChange={handleChange}
                />
              </FormGroup>{' '}
              <Button
                type="submit"
                style={{
                  fontWeight: 'bold',
                }}
              >
                Submit
              </Button>
            </Form>
            {error && <div>Signup failed</div>}
          </div>
        </div>
      </div>
    </main>
  )
}
export default SignUp
