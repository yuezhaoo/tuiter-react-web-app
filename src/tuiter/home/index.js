import React from "react";
import FullPostItem from "./full-post-item";
import WhatsHappening from "./whats-happening";
import {useSelector} from "react-redux";

const HomeComponent = () => {
    const fullPostsArray = useSelector(state => state.tuits);
    return(
        <ul className="list-group">
            <h3>Home</h3>
            <WhatsHappening/>
            {
                fullPostsArray.map(fullPost =>
                    <FullPostItem
                        key={fullPost._id} fullPost={fullPost}/> )
            }
        </ul>
    );
};
export default HomeComponent;