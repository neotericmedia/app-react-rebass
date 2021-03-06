import React, { useState } from "react";

// import styled from "styled-components";
// without pre
// import { Box, Heading, Button, Card } from "rebass/styled-components";
import { Box, Heading, Button, Card } from "rebass";

import People from './People';
// import AuthContext from '../context/auth.context'





const Home = ({ person, setPerson }) => {
  const [name, setName] = useState("");





  const setUpState = (newName) => {
    setPerson({
      ...person,
      persons: [
        { name: newName, lname: "Vance", id: 1 },
        { name: "Jay", lname: "Buzzzzzzer", id: 2 },
      ],
    });
  };
  // console.log('PERSON', person.persons)
  let personsCheck = null;





  const nameChangeHandler = (event, id) => {
    const personIndex = person.persons.findIndex((p) => {
      return p.id === id;
    });
    const nperson = {
      ...person.persons[personIndex],
    };
    nperson.name = event.target.value;
    const persons = [...person.persons];
    persons[personIndex] = nperson;
    setPerson({ ...person, persons: persons });
  };





  const deleteClickhandler = (index) => {
    const persons = person.persons;
    persons.splice(index, 1);
    setPerson({
      ...person,
      persons: persons,
    });
  };





  const togglePersonsHandler = () => {
    const doesShow = person.showPersons;
    setPerson({ ...person, showPersons: !doesShow });
  };





  const getMyPerson = () => {
    person.showPersons ? (personsCheck = (
      <>
        <People
          data={person.persons}
          setUpState={setUpState}
          nameChange={nameChangeHandler}
          deleteClick={deleteClickhandler}
        />
      </>
    )) : (personsCheck = null)
  }
  getMyPerson();





  // const loginHandler = () => {
  //   setPerson(...person, { authenticated: true });
  // };




  return (
    <>
      <Box
        px={3}
        width={[1, 2 / 3]}
        backgroundColor="#ececec"
        sx={{ border: "1px solid red" }}
      >





        <Heading as='h1'>{name}</Heading>
        <input
          type="text"
          onChange={(event) => setName(event.target.value)}
          value={name}
        />




        {personsCheck}



        <Button onClick={() => { setPerson({ ...person, showPersons: !person.showPersons }) }}>
          Button A
        </Button>

        <Button variant="secondary" onClick={togglePersonsHandler}>Button B</Button>



      </Box>




      <Box px={3} width={[1, 1 / 3]}>
        <Card>side nav</Card>
      </Box>
    </>
  );
};

export default Home;
