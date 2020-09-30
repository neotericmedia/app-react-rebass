import React from "react";
import { Box, Heading } from "rebass";

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
        <Heading onClick={setUpState}>
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
