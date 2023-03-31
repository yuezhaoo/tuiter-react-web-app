import React from "react";
import TuitList from "../tuits/tuit-list";
import WhatsHappening from "./whats-happening";


const HomeComponent = () => {
    return(
        <ul className="list-group">
            <h3>Home</h3>
            <WhatsHappening/>
            <TuitList/>
        </ul>
    );
};

export default HomeComponent;