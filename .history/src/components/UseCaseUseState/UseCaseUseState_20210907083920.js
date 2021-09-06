import { Link } from "react-router-dom";

const UseCaseUseState = props => {
    return (
        <>
            <h2>This is the useState section</h2>
            <nav>
                <ul>
                    <li><Link to="/usestate/state-management">State management</Link></li>
                </ul>
            </nav>
        </>
    );
};

export default UseCaseUseState;