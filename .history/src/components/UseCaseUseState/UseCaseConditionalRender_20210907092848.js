const UseCaseConditionalRender = props => {
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