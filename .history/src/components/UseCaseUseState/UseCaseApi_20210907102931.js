const UseCaseApi = props => {
    return (
        <>
            <hr />
            <h2>useState use case</h2>
            <h3>Get API data and store it in state</h3>
            <button onClick={clickHandler}>Set condition</button>
            {condition && <p>Hello!</p>}
        </>
    );
};

export default UseCaseApi;