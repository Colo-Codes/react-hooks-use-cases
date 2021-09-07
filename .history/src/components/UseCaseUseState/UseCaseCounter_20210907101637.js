import { useState } from "react";

const UseCaseCounter = props => {
    const [counter, setCounter] = useState(0);

    return (
        <>
            <hr />
            <h2>useState use case</h2>
            <h3>Counter</h3>
            <button onClick={clickHandlerDecrease}>--</button>
            <span> {counter} </span>
            <button onClick={clickHandlerIncrease}>++</button>
        </>
    );
};

export default UseCaseCounter;