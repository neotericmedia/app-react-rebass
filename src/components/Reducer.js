import React, {useReducer, useState} from 'react';
import { Box } from 'rebass';





function reducer(state, action) {
	switch(action.type) {
		case "add-todo":
			return {
				todos: [...state.todos, {text: action.payload, completed: false }] 
			};
		default:
			return state;
	}
}




const Reducer = () => {
	
	const [{ todos }, dispatch] = useReducer(reducer, { todos: [] });
	const [text, setText] = useState();

	return(
		<>
		
			<Box width={1}>
				<form onSubmit={e => {
					e.preventDefault();
					dispatch({ type: "add-todo", payload: text })
					setText("");
				}}>
					<input value={text} onChange={e => setText(e.target.value)} />
				</form>
			</Box>
			
			
			{todos.map(t => (
				<Box width={1} key={t.text}>{t.text}</Box>
			))}
			
			
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