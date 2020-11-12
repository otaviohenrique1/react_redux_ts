import React, { useReducer } from 'react';

type CardActionType = {
    type: 'increment' | 'decrement'
}

const initialState = {count: 0};

interface CounterState {
    count: number;
};

function reducer(state: CounterState, action: CardActionType) {
  switch (action.type) {
    case 'increment':
      return {count: state.count + 1};
    case 'decrement':
      return {count: state.count - 1};
    default:
      throw new Error();
  }
}

const AppReducer2: React.FC = () => {
    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <>
            <h1>Count: {state.count}</h1>
            <button onClick={() => dispatch({type: 'decrement'})}>-</button>
            <button onClick={() => dispatch({type: 'increment'})}>+</button>
        </>
    );
}

export default AppReducer2;