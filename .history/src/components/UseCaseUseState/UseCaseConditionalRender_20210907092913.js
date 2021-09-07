import { useState } from "react";

const UseCaseConditionalRender = props => {
    const [flag, setFlag = useState];
    return (
        <>
            <hr />
            <h2>useState use case</h2>
            <h3>Conditional Rendering</h3>
            <button onClick={clickHandler}>Set state</button>
            <p>{state}</p>
        </>
    );
};

export default UseCaseConditionalRender;