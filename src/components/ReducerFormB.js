import React, { useReducer } from "react";



var ADD_USER = "ADD_USER";
var DELETE_USER = "DELETE_USER";



const appReducer = (state, action) => {
  switch (action.type) {
    case ADD_USER:
      return {
        users: [...state.users, action.payload]
      };
    case DELETE_USER:
      return {
        users: state.users.filter((item, i) => i !== action.i)
      };
    default:
      throw new Error();
  }
};





const App = () => {
  const initialState = {
    users: [{ name: "Luis", age: 22 }, { name: "Juan", age: 33 }]
  };
  const [state, dispatch] = useReducer(appReducer, initialState);



  const handleAddUser = e => {
    e.preventDefault();

    let data = {
      name: e.target.name.value,
      age: e.target.age.value
    };

    const newUser = data;
    console.log(newUser);

    dispatch({
      type: ADD_USER,
      payload: newUser
    });
  };



  return (
    <div>
      {state.users.map((c, i) => (
        <>
          <p key={i}>
            {c.name} tiene {c.age} años.
        </p>
          <button onClick={() => dispatch({ type: DELETE_USER, i })}>Delete</button>
        </>
      ))}

      <form onSubmit={handleAddUser}>
        <input type="text" placeholder="Nombre" name="name" />
        <input type="text" placeholder="Edad" name="age" />
        <input type="submit" value="Guardar" />
      </form>
    </div>
  );
};






export default App;
