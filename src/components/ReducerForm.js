import React, { useState, useReducer } from 'react';
// import produce from 'immer';
import { useImmerReducer } from 'use-immer';

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

function loginReducer(draft, action) {
  switch (action.type) {
    case 'field': {
      draft[action.field] = action.value;
      return
    }
    case 'login': {
      draft.isLoading = true;
      draft.error = '';
      return
    }
    case 'success': {
      draft.isLoggedIn = true;
      draft.isLoading = false;
      return
    }
    case 'error': {
      draft.error = 'The username or password is incorrect';
      draft.isLoading = false;
      draft.username = '';
      draft.password = '';
      return
    }
    case 'logout': {
      draft.isLoggedIn = false;
      draft.username = '';
      draft.password = '';
      return
    }
    default:
      draft.isLoggedIn = true;
      return
  }
}

// function loginReducer(state, action) {
//   switch (action.type) {
//     case 'field': {
//       return {
//         ...state,
//         [action.field]: action.value,
//       };
//     }
//     case 'login': {
//       return {
//         ...state,
//         isLoading: true,
//         error: '',
//       };
//     }
//     case 'success': {
//       return {
//         ...state,
//         isLoggedIn: true,
//         isLoading: false,
//       };
//     }
//     case 'error': {
//       return {
//         ...state,
//         error: 'The username or password is incorrect',
//         isLoading: false,
//         username: '',
//         password: ''
//       };
//     }
//     case 'logout': {
//       return {
//         ...state,
//         isLoggedIn: false,
//         username: '',
//         password: ''
//       };
//     }
//     default:
//       return {
//         isLoggedIn: true,
//       };
//   }
// }

// const curriedLoginReducer = produce(loginReducer);

const initialState = {
  username: '',
  password: '',
  isLoading: false,
  error: '',
  isLoggedIn: false,
};





function ReducerForm() {
  // const [state, dispatch] = useReducer(loginReducer, initialState);
  // const [state, dispatch] = useReducer(curriedLoginReducer, initialState);
  const [state, dispatch] = useImmerReducer(loginReducer, initialState);

  const { username, password, isLoading, isLoggedIn, error } = state;
  const value = "Theres still huge some kind of weird error going on";

  const submit = async e => {
    e.preventDefault();
    dispatch({ type: 'login' })
    try {
      await loginCreds({ username, password });
      dispatch({ type: 'success' })
    } catch (error) {
      dispatch({ type: 'error' })
    }
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