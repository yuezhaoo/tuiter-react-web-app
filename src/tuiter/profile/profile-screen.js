import React from 'react';
import './profile.css';
import {Link} from "react-router-dom";
import {useSelector} from "react-redux";

function ProfileScreen() {
    const {user} = useSelector(state => state.user);
    return (
        <div>
            <div className="mb-5">
                <img src={`/images/${user.bannerPicture}`}
                     className="img-fluid"/>
                <span className="wd-bottom-left">
                    <img width={100} src={`/images/${user.profilePicture}`}
                         className="rounded-circle"/>
                </span>

                <div className="float-end mt-3 pe-3">
                    <Link to="../edit-profile"
                              className="btn btn-light rounded-pill">
                        Edit profile
                    </Link>
                </div>
            </div>



            <div className="fw-bold wd-large-text wd-relative-top">
                {user.name}
            </div>
            <div style={{color:'gray'}} className="wd-slight-rel-top">
                {user.handle}
            </div>
            <div className="mt-4 wd-relative-top">
                {user.bio}
            </div>

            <div className="mt-3 wd-relative-top">
                <span style={{color:'gray'}} className="pe-3">
                    <i className="bi bi-geo-alt pe-1"/>
                    {user.location}
                </span>
                <span style={{color:'gray'}} className="pe-3">
                    <i className="bi bi-balloon pe-1"/>
                    Born {user.dateOfBirth}
                </span>
                <span style={{color:'gray'}}>
                    <i className="bi bi-calendar3 pe-1"/>
                    Joined {user.dateJoined}
                </span>
            </div>

            <div className="mt-3 wd-relative-top">
                <span className="fw-bold pe-1">
                    {user.followingCount}
                </span>
                <span style={{color:'gray'}} className="pe-4">
                    Following
                </span>

                <span className="fw-bold pe-1">
                    {user.followersCount}
                </span>
                <span style={{color:'gray'}}>
                    Followers
                </span>
            </div>


        </div>


    );
};
export default ProfileScreen;