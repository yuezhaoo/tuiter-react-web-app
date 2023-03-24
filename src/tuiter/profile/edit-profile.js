import React, {useState} from "react";
import {useSelector, useDispatch} from "react-redux";
import {updateUser} from "./profile-reducer";
import {Link} from "react-router-dom";

import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';


function EditProfile() {
    const {user} = useSelector(state => state.user);
    const dispatch = useDispatch();

    const [profile, setProfile] = useState(user);
    const handleSaveButton = () => {
        dispatch(updateUser(profile));
    };


    return (
        <div>
            <Link to="../profile" className="ms-2 pe-4">
                <i className="bi bi-x-lg"></i>
            </Link>
            <span className="fw-bold">
                Edit profile
            </span>
            <span>
                <button
                    onClick={handleSaveButton}
                    className="btn btn-dark btn-sm float-end me-2 rounded-pill">Save</button>
            </span>


            <div className="mt-3 mb-5">
                <img src={`/images/${profile.bannerPicture}`}
                     className="img-fluid"/>
                <span className="wd-bottom-left-edit">
                    <img width={100} src={`/images/${profile.profilePicture}`}
                         className="rounded-circle"/>
                </span>
            </div>

            <div className="wd-relative-top">
                <FloatingLabel controlId="floatingTextarea"
                               label="Name"
                               className="mb-4">
                    <Form.Control as="textarea" placeholder="Leave a comment here"
                                  value={profile.name}
                                  onChange={(e) =>
                                      setProfile({...profile, name: e.target.value})}/>
                </FloatingLabel>


                <FloatingLabel controlId="floatingTextarea"
                               label="Bio"
                               className="mb-4">
                    <Form.Control as="textarea" placeholder="Leave a comment here"
                                  style={{ height: '100px' }}
                                  value={profile.bio}
                                  onChange={(e) =>
                                      setProfile({...profile, bio: e.target.value})}/>
                </FloatingLabel>


                <FloatingLabel controlId="floatingTextarea"
                    label="Location"
                    className="mb-4">
                    <Form.Control as="textarea" placeholder="Leave a comment here"
                                  value={profile.location}
                                  onChange={(e) =>
                                      setProfile({...profile, location: e.target.value})}/>
                </FloatingLabel>


                <FloatingLabel controlId="floatingTextarea"
                               label="Date of Birth"
                               className="mb-4">
                    <Form.Control as="textarea" placeholder="Leave a comment here"
                                  value={profile.dateOfBirth}
                                  onChange={(e) =>
                                      setProfile({...profile, dateOfBirth: e.target.value})}/>
                </FloatingLabel>
            </div>


        </div>


    )



}

export default EditProfile;