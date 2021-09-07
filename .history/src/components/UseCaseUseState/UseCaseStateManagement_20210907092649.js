import { useState } from "react";

const UseCaseStateManagement = props => {
    const [state, setState] = useState('initial value');

    console.log('🔄 This is a re-render');

    const clickHandler = () => {
        setState('new value');
    };

    return (
        <>
            <h2>useState use case</h2>
            <h3>State management</h3>
            <hr />
            <button onClick={clickHandler}>Set state</button>
            <p>{state}</p>
        </>
    );
};

export default UseCaseStateManagement;