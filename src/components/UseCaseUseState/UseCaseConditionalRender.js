import { useState } from "react";

const UseCaseConditionalRender = props => {
    const [condition, setCondition] = useState(false);

    const clickHandler = () => {
        setCondition(true);
    };

    return (
        <>
            <hr />
            <h2>useState use case</h2>
            <h3>Conditional Rendering</h3>
            <button onClick={clickHandler}>Set condition</button>
            {condition && <p>Hello!</p>}
        </>
    );
};

export default UseCaseConditionalRender;