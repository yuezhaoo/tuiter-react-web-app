import React from "react";
import { useDispatch } from "react-redux";
import {deleteTuitThunk} from "../../services/tuits-thunks";
import TuitStats from "./tuit-stats";


const TuitItem = (
    {
        tuits = {
            _id: 123,
            username: "SpaceX",
            time: " · 2h",
            image: "spacex.png",
            liked: true,
            disliked: true,
            replies: 123,
            retuits: 432,
            likes: 2345,
            dislikes: 555,
            handle: "@spacex",
            tuit: "You want to wake up in the morning and think the future is going to be great - and that’s what being a spacefaring civilization is all about. It’s about believing in the future and thinking that the future will be better than the past. And I can’t think of anything more exciting than going out there and being among the stars"
        }
    }
) => {
    const dispatch = useDispatch();
    const deleteTuitHandler = (id) => {
        dispatch(deleteTuitThunk(id));
    }

    return (
        <li className="list-group-item">
            <div className="row">
                <div className="col-1">
                    <img width={50} height={50} className="rounded-pill" src={`/images/${tuits.image}`}/>
                </div>
                <div className="col-11 ps-4">
                    <div>
                        <i className="bi bi-x-lg float-end"
                           onClick={() => deleteTuitHandler(tuits._id)}></i>
                        <span className="fw-bolder">{tuits.username} </span>
                        <i className="bi bi-check-circle"></i>
                        <span style={{color:'gray'}}> {tuits.handle} </span>
                        ·
                        <span style={{color:'gray'}}> {tuits.time}</span>
                    </div>

                    <div className="mt-2 mb-4">
                        {tuits.tuit}
                    </div>
                    <div>
                        <TuitStats tuit={tuits}/>
                    </div>
                </div>
            </div>
        </li>

    );

};

export default TuitItem;