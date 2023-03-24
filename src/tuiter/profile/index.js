import React from 'react';
import ProfileScreen from './profile-screen';
import {useSelector} from "react-redux";

const ProfileComponent = () => {
    const profileArray = useSelector(state => state.profile);
    return (
        <div>
            {profileArray.map((profile) =>
                <ProfileScreen
                    key={profile.id} profile={profile}/> )
            }
        </div>
    );
};
export default ProfileComponent

