// Navbar component with Logout button
// use bootstrap classes for styling

import { Link } from "react-router";

export default function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link to="/user/dashboard" className="nav-link">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/user/myquote" className="nav-link">MyQuote</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/user/profile" className="nav-link">Profile</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/user/logout" className="nav-link">Logout</Link>
                        </li>
                       
                    </ul>
                </div>
            </nav>

    );
}

