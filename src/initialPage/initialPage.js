import React from "react";
import "./initialPage.css";
import lab from '../assets/2_arcade_lab.png';
import MouseFollower from "../mouseFollower/mouseFollower";

const InitialPage = () => {
    return (
        <>
            <MouseFollower />
            <div className="initialPage">
                <img className="laboratory" alt="lab" src={lab}></img>
            </div>
        </>
    );
};
export default InitialPage;