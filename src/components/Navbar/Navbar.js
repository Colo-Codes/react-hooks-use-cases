import { Link } from "react-router-dom";

const Navbar = props => {
    return (
        <nav>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/usestate">useState</Link>
                    <ul>
                        <li><Link to="/usestate/state-management">State Management</Link></li>
                        <li><Link to="/usestate/conditional-rendering">Conditional Rendering</Link></li>
                        <li><Link to="/usestate/toggle">Toggle Flags</Link></li>
                        <li><Link to="/usestate/counter">Counter</Link></li>
                        <li><Link to="/usestate/api">Get API data and store it in state</Link></li>
                    </ul>
                </li>
                <li><Link to="/usereducer">useReducer</Link>
                    <ul>
                        <li><Link to="/usereducer/multiple-states">Manage multiple states: modify an array</Link></li>
                        <li><Link to="/usereducer/complex-states">Modify complex states, such as arrays or objects: login form</Link></li>
                    </ul>
                </li>
                <li><Link to="/useeffect">useEffect</Link>
                    <ul>
                        <li><Link to="/useeffect/fetch-api">Running once on mount: fetch API data</Link></li>
                        <li><Link to="/useeffect/input-validation">Running on state change: validating input field</Link></li>
                        <li><Link to="/useeffect/live-filter">Running on state change: live filtering</Link></li>
                        <li><Link to="/useeffect/animation">Running on state change: trigger animation on new array value</Link></li>
                        <li><Link to="/useeffect/update-fetch">Running on props change: updating fetched API data to get Bacon ipsum paragraphs</Link></li>
                    </ul>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;