import React from "react";
import './tuits.css';
import { useDispatch } from "react-redux";
import {updateTuitThunk} from "../../services/tuits-thunks";


function TuitStats({tuit}) {
    const dispatch = useDispatch();
    const likeHandler = () => {
        dispatch(updateTuitThunk({
            ...tuit,
            liked: !tuit.liked,
            likes: tuit.liked ? tuit.likes - 1 : tuit.likes + 1,
        }));
    };
    const dislikeHandler = () => {
        dispatch(updateTuitThunk({
            ...tuit,
            disliked: !tuit.disliked,
            dislikes: tuit.disliked ? tuit.dislikes - 1 : tuit.dislikes + 1,
        }));
    };
    return (
        <div>
            <div className="wd-icon-equal">
                <i className="bi bi-chat"> {tuit.replies}</i>
            </div>
            <div className="wd-icon-equal">
                <i className="bi bi-arrow-repeat"> {tuit.retuits}</i>
            </div>
            <div className="wd-icon-equal">
                <a>
                    {tuit.liked ? (
                        <i
                            className="bi bi-heart-fill pe-1"
                            onClick={() => likeHandler(tuit._id)}
                            style={{ color: 'red' }}
                        ></i>
                    ) : (
                        <i
                            className="bi bi-heart pe-1"
                            onClick={() => likeHandler(tuit._id)}
                            style={{ color: 'black' }}
                        ></i>
                    )}
                    {tuit.likes}
                </a>
            </div>

            <div className="wd-icon-equal">
                <a>
                    {tuit.disliked ? (
                        <i
                            className="bi bi-hand-thumbs-down-fill pe-1"
                            onClick={() => dislikeHandler(tuit._id)}
                        ></i>
                    ) : (
                        <i
                            className="bi bi-hand-thumbs-down pe-1"
                            onClick={() => dislikeHandler(tuit._id)}
                        ></i>
                    )}
                    {tuit.dislikes}
                </a>
            </div>

            <div className="wd-icon-equal">
                <i className="bi bi-share"></i>
            </div>
        </div>

    )

}

export default TuitStats;

