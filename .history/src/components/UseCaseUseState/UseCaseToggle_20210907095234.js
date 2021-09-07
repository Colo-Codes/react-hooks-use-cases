import { useState } from 'react';
import classes from './UseCaseToggle.module.css';

const UseCaseToggle = props => {
    const [mode, setMode] = useState(false);

    // Use setState function form because the new state depends on the previous one
    const clickHandler = () => {
        setMode(prevState => !prevState);
    };

    const toggledClass = mode ? classes.light : classes.dark;

    return (
        <div className={toggledClass}>
            <hr />
            <h2>useState use case</h2>
            <h3>Toggle flags</h3>
            <button onClick={clickHandler}>Toggle display mode</button>
        </div>
    );
};

export default UseCaseToggle;