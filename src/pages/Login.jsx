import React from "react";
import "../css/Login.css"
import BtnImg from "../img/SingInWithGoogle.png"

export default class Login extends React.Component{
    render() {
        return (
            <div className="wrap-index-main">
                <div className="main">
                    <div className="title">Social Calendar</div>
                    <a href="Calendar" className="google-auth">
                        <img src={BtnImg} alt="зайти через гугол" className="google-img" />
                    </a>
                </div>
            </div>
        );
    }
}
