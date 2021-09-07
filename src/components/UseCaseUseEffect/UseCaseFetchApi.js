import { useState, useEffect } from "react";

const UseCaseFetchApi = props => {
    // useState is needed in order to display the result and spinner on the screen
    const [bio, setBio] = useState({});
    const [isLoading, setIsLoading] = useState(false);

    // 'async' shouldn't be used in the useEffect callback function because these callbacks are synchronous to prevent race conditions. We need to put the async function inside.
    useEffect(() => {
        const fetchData = async () => {
            setIsLoading(true);
            const response = await fetch('https://swapi.dev/api/people/1/');
            const data = await response.json();
            console.log(data);
            setBio(data);
            setIsLoading(false);
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
            {isLoading ? <p>Getting data... 👤</p> : <pre>{JSON.stringify(bio, null, '\t')}</pre>}
        </>
    );
};

export default UseCaseFetchApi;