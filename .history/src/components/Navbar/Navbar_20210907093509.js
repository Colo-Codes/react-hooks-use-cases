import { Link } from "react-router-dom";

const Navbar = props => {
    return (
        <nav>
            <h1>This is the navbar</h1>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/usestate">useState</Link>
                    <ul>
                        <li><Link to="/usestate/state-management">State Management</Link></li>
                        <li><Link to="/usestate/conditional-rendering">Conditional Rendering</Link></li>
                        <li><Link to="/usestate/toggle">Toggle Flags</Link></li>
                    </ul>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;