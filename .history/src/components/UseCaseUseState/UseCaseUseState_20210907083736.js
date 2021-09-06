import { Link } from "react-router-dom";

const UseCaseUseState = props => {
    return (
        <>
            <h1>This is the useState section</h1>
            <nav>
                <ul>
                    <li><Link to="/usestate/state-management">State management</Link></li>
                </ul>
            </nav>
        </>
    );
};

export default UseCaseUseState;