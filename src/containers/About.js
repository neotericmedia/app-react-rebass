import React, { useState, useEffect, useRef, useContext } from "react";
import { Box, Button, Heading } from "rebass";
import AuthContext from '../context/auth.context';
import { login } from '../utils/login';

function About() {
  const [name, setName] = useState("");



  // const msg = useContext(AuthContext);
  const { user, setUser } = useContext(AuthContext);


  const myRef = useRef();
  const buttonRef = useRef();



  useEffect(() => {
    // buttonRef.current.click();
    console.log(myRef);
    return () => {
      console.log("cleanup");
    };
  }, []);



  const onSubmit = (e) => {
    e.preventDefault();
    console.log("myRef", myRef.current.value);
    // console.log(name);
    setName("");
  };



  return (
    <>
      <Box>






        <pre>{JSON.stringify(user, null, 2)}</pre>

        {user ?
          <button onClick={async () => setUser(null)}>
            LOG-OUT User
          </button>
          : <button
            onClick={async () => {
              const user = await login();
              setUser(user)
            }}
          >
            LOGINs
          </button>
        }






        <Heading>{name}</Heading>
        <form onSubmit={onSubmit}>

          <input
            ref={myRef}
            text="text"
            onChange={(event) => {
              setName(event.target.value);
              console.log(event.target.value);
            }}
            value={name}
          />

          <Button ref={buttonRef}>Button</Button>
        </form>
      </Box>
    </>
  );
}

export default About;
