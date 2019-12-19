import React from "react";
import "../css/Login.css"
import BtnImg from "../img/SingInWithGoogle.png"

export default class Login {
    render() {
        return (
            <div className="main">
            <div className="title">Social Calendar</div>
            <img src={BtnImg} alt="зайти через гугол" className="sign-button"/>
        </div>
        );
    }
}
