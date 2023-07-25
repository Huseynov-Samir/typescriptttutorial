import {useReducer} from 'react'

type CounterState={
	count:number
}

type CounterAction={
	type:'icrement'|'decrement'|"reset"
	payload?:number
}

const initialState={count:0}

function reducer(state:CounterState,action:CounterAction){
	switch (action.type) {
		case "icrement":
			return {count:state.count+(action.payload ?? 0)}
		case "decrement":
			return {count:state.count-(action.payload ?? 0)}	
		case "reset":
			return initialState
		default:
			return state
	}
}

function Counter() {
	const [state,dispatch]=useReducer(reducer,initialState)
	return ( 
		<>
		{state.count}
		<button onClick={()=>dispatch({type:'icrement',payload:10})}>
			10+
		</button>
		<button onClick={()=>dispatch({type:'decrement',payload:10})}>
			10+
		</button>
		<button onClick={()=>dispatch({type:'reset'})}>
			0
		</button>
		</>
	 );
}

export default Counter;