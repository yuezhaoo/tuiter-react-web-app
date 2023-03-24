import React from "react";
import {Link} from "react-router-dom";
import {useLocation} from "react-router";


const NavigationSidebar = () => {
    const {pathname} = useLocation();
    const paths = pathname.split('/')
    const active = paths[2];

    return (
        <div className="list-group">
            <a className="list-group-item list-group-item-action">
                <i className="bi bi-twitter float-start"></i>
                <span className="d-none d-xl-block float-start ms-2">Tuiter</span>
            </a>
            <Link to="/tuiter/home" className={`list-group-item list-group-item-action
                    ${active === 'home'?'active':''}`}>
                <i className="bi bi-house float-start"></i>
                <span className="d-none d-xl-block float-start ms-2">Home</span>
            </Link>
            <Link to="/tuiter/explore" className={`list-group-item list-group-item-action
                    ${active === 'explore'?'active':''}`}>
                <i className="bi bi-hash float-start"></i>
                <span className="d-none d-xl-block float-start ms-2">Explore</span>
            </Link>
            <Link to="/" className={`list-group-item list-group-item-action
                    ${active === 'labs'?'active':''}`}>
                <i className="bi bi-pencil float-start"></i>
                <span className="d-none d-xl-block float-start ms-2">Labs</span>
            </Link>
            <a className={`list-group-item list-group-item-action
                    ${active === 'notifications'?'active':''}`}>
                <i className="bi bi-bell float-start"></i>
                <span className="d-none d-xl-block float-start ms-2">Notifications</span>
            </a>
            <a className={`list-group-item list-group-item-action
                    ${active === 'messages'?'active':''}`}>
                <i className="bi bi-envelope float-start"></i>
                <span className="d-none d-xl-block float-start ms-2">Messages</span>
            </a>
            <a className={`list-group-item list-group-item-action
                    ${active === 'bookmarks'?'active':''}`}>
                <i className="bi bi-bookmark-star float-start"></i>
                <span className="d-none d-xl-block float-start ms-2">Bookmarks</span>
            </a>
            <a className={`list-group-item list-group-item-action
                    ${active === 'lists'?'active':''}`}>
                <i className="bi bi-list-ul float-start"></i>
                <span className="d-none d-xl-block float-start ms-2">Lists</span>
            </a>
            <Link to="/tuiter/profile" className={`list-group-item list-group-item-action
                    ${active === 'profile'?'active':''}`}>
                <i className="bi bi-person-circle float-start"></i>
                <span className="d-none d-xl-block float-start ms-2">Profile</span>
            </Link>
            <a className={`list-group-item list-group-item-action
                    ${active === 'more'?'active':''}`}>
                <i className="bi bi-three-dots float-start"></i>
                <span className="d-none d-xl-block float-start ms-2">More</span>
            </a>
        </div>
    );
};
export default NavigationSidebar;