import React from "react";
import { Box, Heading, Button, Card } from "rebass";

const Person = ({
  name,
  setUpState,
  lname,
  nameChange,
  deleteClick,
  index,
}) => {
  return (
    <>

      <Box>
        <Heading as="H1" onClick={setUpState}>
          {index + 1} {name} {lname}
        </Heading>
        <p onClick={deleteClick}>{lname}</p>
        <input type="text" onChange={nameChange} value={name} />
      </Box>

    </>
  );
};

// export default Person;
export default React.memo(Person);
