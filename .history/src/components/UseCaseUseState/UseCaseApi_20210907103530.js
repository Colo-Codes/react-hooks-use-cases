const UseCaseApi = props => {


    const clickHandler = async () => {
        const response = await fetch('https://swapi.dev/api/starships/10');
    };

    return (
        <>
            <hr />
            <h2>useState use case</h2>
            <h3>Get API data and store it in state</h3>
            <button onClick={clickHandler}>Get  fetch API</button>
        </>
    );
};

export default UseCaseApi;