import React from "react";
import './fullPost.css';

const FullPostItem = (
    {
        fullPost = {
            "retuit": "Elon Musk retuited",
            "AvatarIcon": "spacex.jpeg",
            "userName": "SpaceX",
            "handle": "@SpaceX",
            "time": " · 23h",
            "title": "Dennis and Akiko Tito are the first two crewmembers on Starships second commercial spaceflight around the moon -> spacex.com/updates",
            "image": "information4.png",
            "commentAmount": "595",
            "syncAmount": "1,168",
            "loveAmount": "11.1k",
            "showThread": "Show this thread"
        }
    }
) => {
    return(
        // <li className="list-group-item">
        //     <div className="row">
        //         <div className="col-1">
        //             <img width={50} height={50} className="rounded-pill" src={`/images/${fullPost.AvatarIcon}`}/>
        //         </div>
        //         <div className="col-11 ps-4">
        //             <span className="fw-bolder">{fullPost.userName} </span>
        //             <i className="bi bi-check-circle"></i>
        //             <span style={{color:'gray'}}> {fullPost.handle}</span>
        //             <span style={{color:'gray'}}>{fullPost.time}</span>
        //             <div>
        //                 {fullPost.title}
        //             </div>
        //
        //             <div className="mt-2 float-start">
        //                 <img width={504} height={264} className="float-end rounded-3" src={`/images/${fullPost.image}`}/>
        //             </div>
        //
        //             <div className="mt-2">
        //                 <div className="wd-icon-equal">
        //                     <i className="bi bi-chat"> {fullPost.commentAmount}</i>
        //                 </div>
        //                 <div className="wd-icon-equal">
        //                     <i className="bi bi-arrow-repeat"> {fullPost.syncAmount}</i>
        //                 </div>
        //                 <div className="wd-icon-equal">
        //                     <i className="bi bi-heart"> {fullPost.loveAmount}</i>
        //                 </div>
        //                 <div className="wd-icon-equal">
        //                     <i className="bi bi-upload"></i>
        //                 </div>
        //             </div>
        //
        //         </div>
        //     </div>
        // </li>

        <div className="wd-border wd-border-color wd-bottom-10">
            <div className="wd-left-16 wd-top-12 wd-inline">
                <div className="ps-4 fw-bold small" style={{color:'#6c757d'}}>
                    <i className="bi bi-arrow-repeat pe-3"></i>
                    {fullPost.retuit}
                </div>

                <img width={48} height={48} className="col-1 rounded-pill float-start" src={`/images/${fullPost.AvatarIcon}`}/>

                <div className="col-11 wd-width-506 float-start">
                    <span className="ps-2 fw-bold">
                        {fullPost.userName}
                    </span>

                    <i className="bi bi-three-dots float-end" style={{color:'#6c757d'}}></i>

                    <i className="bi bi-check-circle ps-1 wd-blue"></i>

                    <span className="wd-light-gray ps-2">
                        {fullPost.handle}
                    </span>

                    <span className="wd-light-gray">
                        {fullPost.time}
                    </span>

                    <div className="ps-2">
                        {fullPost.title}
                    </div>

                    <div className="mt-2 ps-2">
                        <img className="rounded-4 w-100" src={`/images/${fullPost.image}`}/>
                    </div>

                    <div className="mt-1 ps-2">
                        <div className="wd-bottom-12
                                    wd-relative-top
                                    wd-light-gray
                                    wd-icon-equal">
                            <i className='bi bi-chat wd-right-12'></i>{fullPost.commentAmount}
                        </div>
                        <div className="wd-relative-top
                                    wd-light-gray
                                    wd-icon-equal">
                            <i className='bi bi-arrow-repeat wd-right-12'></i>{fullPost.syncAmount}
                        </div>
                        <div className="wd-relative-top
                                    wd-light-gray
                                    wd-icon-equal">
                            <i className='bi bi-heart wd-right-12'></i>{fullPost.loveAmount}
                        </div>
                        <div className="wd-relative-top
                                    wd-light-gray
                                    wd-icon-equal">
                            <i className='bi bi-upload wd-right-12'></i>
                        </div>
                    </div>

                    <div className="wd-blue pt-5 ps-2">
                        {fullPost.showThread}
                    </div>

                </div>

            </div>

        </div>
    );
};
export default FullPostItem;