import React, { useState, useReducer } from 'react';
import styled from 'styled-components';
import { Box, Button, Flex, Card, Heading } from 'rebass';
import {
  Label,
  Input,
} from '@rebass/forms'

import { loginCreds } from '../utils/login';




const DisclaimerStyle = styled(Heading)`
  font-weight: bold;
  margin-bottom: 30px !important;
  display: block;
  color: ${({ isLoggedIn }) => (isLoggedIn ? 'green' : 'red')};
`;

const Disclaimer = ({ value, isLoggedIn }) => {
  return (
    <>
      <DisclaimerStyle
        isLoggedIn={isLoggedIn}>
        <Card>{value}</Card>
      </DisclaimerStyle>
    </>
  )
}



function loginReducer(state, action) {
  switch (action.type) {
    case 'field': {
      return {
        ...state,
        [action.field]: action.value,
      };
    }
    case 'login': {
      return {
        ...state,
        isLoading: true,
        error: '',
      };
    }
    case 'success': {
      return {
        ...state,
        isLoggedIn: true,
        isLoading: false,
      };
    }
    case 'error': {
      return {
        ...state,
        error: 'The username or password is incorrect',
        isLoading: false,
        username: '',
        password: ''
      };
    }
    case 'logout': {
      return {
        ...state,
        isLoggedIn: false,
        username: '',
        password: ''
      };
    }
    default:
      return {
        isLoggedIn: true,
      };
  }
}



const initialState = {
  username: '',
  password: '',
  isLoading: false,
  error: '',
  isLoggedIn: false,
};



function ReducerForm() {
  const [state, dispatch] = useReducer(loginReducer, initialState);
  const { username, password, isLoading, isLoggedIn, error } = state;

  // const [username, setUsername] = useState('');
  // const [password, setPassword] = useState('');
  // const [isLoading, setIsLoading] = useState(false);
  // const [isLoggedIn, setLoggedIn] = useState(false);
  // const [error, setError] = useState('');
  const value = "Theres still huge some kind of weird error going on";



  const submit = async e => {
    e.preventDefault();
    // setUsername('');
    // setPassword('');
    // setError('')
    // setIsLoading(true);
    dispatch({ type: 'login' })
    try {
      await loginCreds({ username, password });
      // setLoggedIn(true);
      dispatch({ type: 'success' })
    } catch (error) {
      // setError('The username or password is incorrect');
      dispatch({ type: 'error' })
    }
    // dispatch({ type: 'logout' })
    // setIsLoading(false);
  }



  return (
    <>


      <Card width={1}>
        <Box
          as='form'
          onSubmit={submit}
          py={3}>
          <Flex mx={-2} mb={3} px={50} flexWrap="wrap">
            <Box width={1}>




              {isLoggedIn ? (
                <>
                  <Disclaimer
                    value={`Welcome ${username}`}
                    isLoggedIn={isLoggedIn}
                  />
                  {/* <Button width={1} py={3} onClick={(() => setLoggedIn(false))}> */}
                  <Button width={1} py={3} onClick={() => dispatch({ type: 'logout' })}>
                    Log Out
                  </Button>
                </>
              ) : (
                  <>



                    <Box>
                      {error && <Disclaimer value={value} />}
                      <Heading as='h1' textAlign="center">Login</Heading>
                      <Label htmlFor='name'>Name</Label>
                      <Input
                        id='name'
                        name='name'
                        value={username}
                        // onChange={e => setUsername(e.target.value)}
                        onChange={e =>
                          dispatch({
                            type: 'field',
                            field: 'username',
                            value: e.currentTarget.value
                          })}
                      />
                    </Box>



                    <Box py={20}>
                      <Label htmlFor='password'>Password</Label>
                      <Input
                        id='password'
                        name='password'
                        value={password}
                        // onChange={e => setPassword(e.target.value)}
                        onChange={e =>
                          dispatch({
                            type: 'field',
                            field: 'password',
                            value: e.currentTarget.value
                          })}
                      />
                    </Box>



                    <Button width={1} py={3} type="submit" disabled={isLoading}>
                      {isLoading ? 'Logging in...' : 'Log In'}
                    </Button>




                  </>
                )}
            </Box>
          </Flex>
        </Box>
      </Card>





    </>
  )
}

export default ReducerForm;