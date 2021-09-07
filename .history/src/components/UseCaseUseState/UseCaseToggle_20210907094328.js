import { useState } from 'react';
import classes from './UseCaseToggle.module.css';

const UseCaseToggle = props => {
    const [mode, setMode] = useState(false);

    const clickHandler = () => {
        setMode(prevState => !prevState);
    };

    console.log(mode);

    return (
        <div>
            <hr />
            <h2>useState use case</h2>
            <h3>Toggle flags</h3>
            <button onClick={clickHandler}>Toggle display mode</button>
        </div>
    );
};

export default UseCaseToggle;