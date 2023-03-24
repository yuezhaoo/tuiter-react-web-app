import {Link} from "react-router-dom";

function Nav() {
    return (
        <div>
            <Link to="/">Labs</Link> |
            <Link to="/a6">Assignment 6</Link> |
            <Link to="/">Assignment 7</Link> |
            <Link to="/tuiter/explore">Tuiter</Link>
        </div>
    );
}

export default Nav;