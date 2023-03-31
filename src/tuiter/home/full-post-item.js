import React from "react";
import {useDispatch} from "react-redux";
import './fullPost.css';
import {deleteTuit, likeTuit} from "../tuits/tuits-reducer";

const FullPostItem = (
    {
        fullPost = {
            "_id": 123,
            "userName": "SpaceX",
            "time": " · 2h",
            "image": "spacex.png",
            "liked": true,
            "replies": 123,
            "retuits": 432,
            "likes": 2345,
            "handle": "@spacex",
            "tuit": "You want to wake up in the morning and think the future is going to be great - and that’s what being a spacefaring civilization is all about. It’s about believing in the future and thinking that the future will be better than the past. And I can’t think of anything more exciting than going out there and being among the stars"
        }
    }

) => {

    const dispatch = useDispatch();
    const deleteTuitHandler = (id) => {
        dispatch(deleteTuit(id));
    }

    const likeHandler = (id) => {
        dispatch(likeTuit(id));
    }

    return(
        <li className="list-group-item">
            <div className="row">
                <div className="col-1">
                    <img width={50} height={50} className="rounded-pill" src={`/images/${fullPost.image}`}/>
                </div>
                <div className="col-11 ps-4">
                    <div>
                        <i className="bi bi-x-lg float-end"
                           onClick={() => deleteTuitHandler(fullPost._id)}></i>
                        <span className="fw-bolder">{fullPost.userName} </span>
                        <i className="bi bi-check-circle"></i>
                        <span style={{color:'gray'}}> {fullPost.handle}</span>
                        <span style={{color:'gray'}}>{fullPost.time}</span>
                    </div>

                    <div className="mt-2 mb-4">
                        {fullPost.tuit}
                    </div>

                    <div>
                        <div className="wd-icon-equal">
                            <i className="bi bi-chat"> {fullPost.replies}</i>
                        </div>
                        <div className="wd-icon-equal">
                            <i className="bi bi-arrow-repeat"> {fullPost.retuits}</i>
                        </div>
                        <div className="wd-icon-equal">
                            <a>
                                {fullPost.liked ? (
                                    <i
                                        className="bi bi-heart-fill pe-1"
                                        onClick={() => likeHandler(fullPost._id)}
                                        style={{ color: 'red' }}
                                    ></i>
                                ) : (
                                    <i
                                        className="bi bi-heart pe-1"
                                        onClick={() => likeHandler(fullPost._id)}
                                        style={{ color: 'black' }}
                                    ></i>
                                )}
                                {fullPost.likes}
                            </a>

                        </div>
                        <div className="wd-icon-equal">
                            <i className="bi bi-share"></i>
                        </div>
                    </div>

                </div>
            </div>
        </li>


    );
};
export default FullPostItem;