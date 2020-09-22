import React, { useState, useEffect, useRef } from "react";
import { Box, Button, Heading } from "rebass";

function About() {
  const [name, setName] = useState("");
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
