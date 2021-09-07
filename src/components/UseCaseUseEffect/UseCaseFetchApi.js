import { useState, useEffect } from "react";

const UseCaseFetchApi = props => {
    // useState is needed in order to display the result on the screen
    const [bio, setBio] = useState({});

    // 'async' shouldn't be used in the useEffect callback function because these callbacks are synchronous to prevent race conditions. We need to put the async function inside.
    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch('https://swapi.dev/api/people/1/');
            const data = await response.json();
            console.log(data);
            setBio(data);
        };
        fetchData();
    }, []);
    // Empty dependencies array will make useEffect to run only once at startup because that array never changes

    return (
        <>
            <hr />
            <h2>useEffect use case</h2>
            <h3>Running once on mount: fetch API data</h3>
            <p>Luke Skywalker's bio:</p>
            <pre>{JSON.stringify(bio, null, '\t')}</pre>
        </>
    );
};

export default UseCaseFetchApi;