import { useReducer } from "react";

const myReducer = (prevState, action) => {
    let array;
    switch (action.type) {
        case 'ADD':
            array = [...prevState];
            array.push(action.payload);
            return array;
        case 'REMOVE':
            array = [...prevState];
            array.pop();
            return array;
        case 'CLEAR':
            return prevState = [];
        default:
            break;
    }
};

const UseCaseMultipleStates = props => {
    const [state, dispatcher] = useReducer(myReducer, ['initial value']);
    console.log(state);

    // Three different state triggers
    const addHandler = () => {
        dispatcher({ type: 'ADD', payload: Math.round((Math.random() * 100 + 100)) });
    };
    const removeHandler = () => {
        dispatcher({ type: 'REMOVE' });
    };
    const clearHandler = () => {
        dispatcher({ type: 'CLEAR' });
    };

    return (
        <>
            <hr />
            <h2>useReducer use case</h2>
            <h3>Manage multiple states: modify an array</h3>
            <button onClick={addHandler}>[+] Add random value to array</button>
            <button style={{ margin: "0 2rem" }} onClick={removeHandler}>[-] Remove last value from array</button>
            <button onClick={clearHandler}>[x] Clear array</button>
            <p>Shopping cart array:</p>
            <p><b>{state.length === 0 && '(empty)'}{state.join(' - ')}</b></p>
        </>
    );
};

export default UseCaseMultipleStates;