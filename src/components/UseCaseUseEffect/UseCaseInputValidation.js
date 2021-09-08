import { useEffect, useState } from "react";

const UseCaseInputValidation = props => {
    const [input, setInput] = useState('');
    const [isValid, setIsValid] = useState(false);

    const inputHandler = e => {
        setInput(e.target.value);
    };

    useEffect(() => {
        if (input.length < 5 || /\d/.test(input)) {
            setIsValid(false);
        } else {
            setIsValid(true);
        }
    }, [input]);

    return (
        <>
            <hr />
            <h2>useEffect use case</h2>
            <h3>Running on state change: validating input field</h3>
            <form>
                <label>Write something (more than 5 non numerical characters is a valid input)</label><br />
                <input type="text" onChange={inputHandler} style={{ height: '1.5rem', width: '20rem', marginTop: '1rem' }} />
            </form>
            <p><span style={isValid ? { backgroundColor: 'lightgreen', padding: '.5rem' } : { backgroundColor: 'lightpink', padding: '.5rem' }}>{isValid ? 'Valid input' : 'Input not valid'}</span></p>
        </>
    );
};

export default UseCaseInputValidation;