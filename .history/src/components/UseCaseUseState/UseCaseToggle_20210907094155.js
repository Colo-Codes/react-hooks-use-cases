import classes from './UseCaseToggle.module.css';

const UseCaseToggle = props => {
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