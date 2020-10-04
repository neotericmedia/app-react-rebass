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



function ReducerForm() {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [isLoggedIn, setLoggedIn] = useState(false);
  const value = "Theres still huge some kind of weird error going on";

  const submit = async e => {
    e.preventDefault();
    setError('')
    setIsLoading(true);
    try {
      await loginCreds({ username, password });
      setLoggedIn(true);
    } catch (error) {
      setError('The username or password is incorrect');
    }
    setIsLoading(false);
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
                  <Button width={1} py={3} onClick={(() => setLoggedIn(false))}>
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
                        onChange={e => setUsername(e.currentTarget.value)}
                      />
                    </Box>



                    <Box py={20}>
                      <Label htmlFor='password'>Password</Label>
                      <Input
                        id='password'
                        name='password'
                        value={password}
                        onChange={e => setPassword(e.currentTarget.value)}
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