const UseCaseConditionalRender = props => {
    return (
        <>
            <h2>useState use case</h2>
            <h3>Conditional Rendering</h3>
            <hr />
            <button onClick={clickHandler}>Set state</button>
            <p>{state}</p>
        </>
    );
};

export default UseCaseConditionalRender;