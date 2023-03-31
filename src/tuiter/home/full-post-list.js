import React from "react";
import FullPostItem from "./full-post-item";
import {useSelector} from "react-redux";

const FullPostList = () => {
    const fullPostsArray = useSelector(state => state.tuits);
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
export default FullPostList;