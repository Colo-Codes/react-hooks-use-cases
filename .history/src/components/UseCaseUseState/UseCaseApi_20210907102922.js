const UseCaseApi = props => {
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

export default UseCaseApi;