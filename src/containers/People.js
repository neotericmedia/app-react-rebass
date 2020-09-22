import React from 'react';
import Person from '../components/Person'


const People = ({ data, nameChange, deleteClick, setUpState }) => {
  return (
    <>
      {data.map(({ name, lname, id }, index) => (
        <>
          <Person
            id={id}
            key={id}
            name={name}
            lname={lname}
            index={index}
            nameChange={(event) => nameChange(event, id)}
            deleteClick={() => deleteClick(index)}
            setUpState={setUpState.bind(this, "Bub")}
          />
        </>

      ))}
    </>
  );
};



export default People;