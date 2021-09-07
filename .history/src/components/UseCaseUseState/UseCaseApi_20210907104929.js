import { useState } from "react";

const UseCaseApi = props => {
    const [starship, setStarship] = useState('');

    const spinner = flag => flag ? 'Getting data...' : '';

    const clickHandler = async () => {
        spinner(true);

        const response = await fetch('https://swapi.dev/api/starships/10');
        const data = await response.json();
        setStarship(JSON.stringify(data, null, "\t"));

        spinner(false);
    };

    return (
        <>
            <hr />
            <h2>useState use case</h2>
            <h3>Get API data and store it in state</h3>
            <button onClick={clickHandler}>Get Millennium Falcon data</button>
            {spinner}
            <pre>{starship}</pre>
        </>
    );
};

export default UseCaseApi;