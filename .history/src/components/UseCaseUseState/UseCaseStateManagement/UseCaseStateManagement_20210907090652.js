import { useState } from "react";

const UseCaseStateManagement = props => {
    const [state, setState] = useState('initial value');

    setState('new value');
    console.log(state);

    return (
        <>
            <h2>useState use case</h2>
            <h3>State management</h3>
            <hr />
            <p>{state}</p>
        </>
    );
};

export default UseCaseStateManagement;