import React, { useReducer, useState, useContext } from 'react';
import { Box, Button, Flex } from 'rebass';




const reducer = (state, action) => {
  switch (action.type) {
    case "add-todo":
      return {
        todos: [
          ...state.todos,
          {
            id: Date.now(),
            text: action.payload,
            completed: false
          }
        ],
        todoCount: state.todoCount + 1
      };
    case "toggle-todo":
      return {
        todos: state.todos.map((t, idx) =>
          idx === action.idx ? { ...t, completed: !t.completed } : t
        ),
        // todoCount: state.todoCount - 1
      };
    case "delete-todo":
      return {
        todos: state.todos.filter((item, i) => i !== action.idx),
        todoCount: state.todoCount - 1
      };
    default: {
      return state;
    }
  }
}




const Context = React.createContext();




const Reducer = () => {
  const [{ todos, todoCount }, dispatch] = useReducer(reducer, {
    todos: [],
    todoCount: 0
  });
  const [text, setText] = useState();


  const submit = e => {
    e.preventDefault();
    dispatch({ type: "add-todo", payload: text })
    setText("");
  }


  return (
    <>


      <Context.Provider value={dispatch}>
        <Box width={1} mb={30}>
          <p>Number of to-dos: {todoCount}</p>
          <form onSubmit={submit}>
            <input value={text} onChange={e => setText(e.target.value)} />
            <Button type='submit'>Submit</Button>
          </form>
        </Box>
        <ToDoList items={todos} />
      </Context.Provider>


    </>
  )
}






const ToDoList = ({ items }) => {
  return (
    <>
      {items.map((item, idx) => (
        <>
          <ToDoItem key={item.id} idx={idx} {...item} />
        </>
      ))}
    </>
  )
}




const ToDoItem = ({ idx, id, text, completed }) => {
  const dispatch = useContext(Context);
  return (
    <>
      <Box width={1} key={id}>
        <Flex justify-content="space-between">

          <input type="checkbox" value={completed} />

          <input
            type="text"
            value={text}
            onClick={() => dispatch({ type: 'toggle-todo', idx })}
            style={{ textDecoration: completed ? 'line-through' : '' }}
          />

          <Button width={1} py={3} onClick={(() => dispatch({ type: "delete-todo", idx }))}>
            Delete
          </Button>

        </Flex>
      </Box>
    </>
  )
}




























// pure componet 
// function reducer(state, action) {
// 	switch(action.type) {
// 		case 'increment':
// 			// avoid mutating state with ++
// 			return state + 1;
// 		case 'decrement': 
// 			return state - 1;
// 		default:
// 			return state;
// 	}
// }




// const Reducer = () => {
// 	const [count, dispatch] = useReducer(reducer, 0)
// 	return(
// 		<>
// 			<div>count: {count}</div>
// 			<button onClick={() => dispatch({ type: 'increment', })}>Increment</button>
// 			<button onClick={() => dispatch({ type: 'decrement', })}>Decrement</button>
// 		</>
// 	)
// }








export default Reducer;