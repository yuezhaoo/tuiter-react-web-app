import React from "react";
import fullPostsArray from './fullPost.json';
import FullPostItem
    from "./full-post-item";

const HomeComponent = () => {
    return(
        <ul className="list-group">
            {
                fullPostsArray.map(fullPost =>
                    <FullPostItem
                        key={fullPost._id} fullPost={fullPost}/> )
            }
        </ul>
    );
};
export default HomeComponent;