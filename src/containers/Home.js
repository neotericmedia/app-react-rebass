import React, { useState } from "react";
import { Box, Heading, Button, Card } from "rebass";

const Person = ({ data }) => {
  const { name, lname } = data;
  return (
    <>
      <Box>
        <Heading as="H1">
          {name} {lname}
        </Heading>
      </Box>
    </>
  );
};

const Home = (props) => {
  const [name, setName] = useState("");
  // const [person, setPerson] = useState(data);
  console.log(props);
  const [person, setPerson] = useState([
    {
      name: "John",
      lname: "Baskins",
    },
    {
      name: "Bob",
      lname: "Barker",
    },
  ]);
  const [toggle, setToggle] = useState({ toggle: false });

  // const person = null;
  const getMyPerson = person.map((data) => <Person data={data} />);

  return (
    <>
      <Box
        px={3}
        width={[1, 2 / 3]}
        backgroundColor="#ececec"
        sx={{ border: "1px solid red" }}
      >
        <h1>{name}</h1>
        <input
          type="text"
          onChange={(event) => setName(event.target.value)}
          value={name}
        />
        {toggle.toggle && getMyPerson}
        <Button
          onClick={() => {
            setToggle({ toggle: !toggle.toggle });
          }}
        >
          dddd
        </Button>
        <Button variant="secondary">Button</Button>
      </Box>
      <Box px={3} width={[1, 1 / 3]}>
        <Card>asdf</Card>
      </Box>
    </>
  );
};

export default Home;
