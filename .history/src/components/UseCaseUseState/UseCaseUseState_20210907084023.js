import { Link } from "react-router-dom";
import { Router } from "react-router";

const UseCaseUseState = props => {
    return (
        <Router>
            <h2>This is the useState section</h2>
            <nav>
                <ul>
                    <li><Link to="/usestate/state-management">State management</Link></li>
                </ul>
            </nav>
        </Router>
    );
};

export default UseCaseUseState;