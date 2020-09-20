import React, { useState } from "react";
import { Box, Button, Heading } from "rebass";

function About() {
  const [name, setName] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(name);
    setName("");
  };

  return (
    <>
      <Box>
        <Heading>{name}</Heading>
        <form onSubmit={onSubmit}>
          <input
            text="text"
            onChange={(event) => {
              setName(event.target.value);
              console.log(event.target.value);
            }}
            value={name}
          />
          <Button>Button</Button>
        </form>
      </Box>
    </>
  );
}

export default About;
