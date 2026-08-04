import { Link } from "react-router-dom";

export function Navbar(){
    return(
        <>
        <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/Tasks">Tasks</Link></li>
            <li><Link to="/About">About</Link></li>
        </ul>
        </>
    );
}