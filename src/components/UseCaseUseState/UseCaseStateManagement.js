import { useState } from "react";

const UseCaseStateManagement = props => {
    const [state, setState] = useState('initial value');

    console.log('🔄 This is a re-render');

    const clickHandler = () => {
        setState('new value');
    };

    return (
        <>
            <hr />
            <h2>useState use case</h2>
            <h3>State Management</h3>
            <button onClick={clickHandler}>Set state</button>
            <p>{state}</p>
        </>
    );
};

export default UseCaseStateManagement;