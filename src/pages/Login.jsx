import React from "react";
import "../css/Login.css"

export default class Login extends React.Component {
    componentDidMount() {
        const _onInit = auth2 => {
            console.log('init OK', auth2)
        }
        const _onError = err => {
            console.log('error', err)
        }
        window.gapi.load('auth2', function () {
            window.gapi.auth2
                .init({
                    client_id:
                        process.env.REACT_APP_GOOGLE_CLIENT_ID,
                })
                .then(_onInit, _onError)
        })
    }
    signIn = () => {
        const auth2 = window.gapi.auth2.getAuthInstance()
        auth2.signIn().then(googleUser => {

            const profile = googleUser.getBasicProfile()
            console.log('ID: ' + profile.getId())
            console.log('Full Name: ' + profile.getName())
            console.log('Given Name: ' + profile.getGivenName())
            console.log('Family Name: ' + profile.getFamilyName())
            console.log('Image URL: ' + profile.getImageUrl())
            console.log('Email: ' + profile.getEmail())

            const id_token = googleUser.getAuthResponse().id_token
            console.log('ID Token: ' + id_token)
        })
    }
    signOut = () => {
        const auth2 = window.gapi.auth2.getAuthInstance()
        auth2.signOut().then(function () {
            console.log('User signed out.')
        })
    }

    render() {
        return (
            <div className="wrap-index-main">
                <div className="main">
                    <div className="title">Social Calendar</div>
                    <button className="google-auth-button" onClick={this.signIn}/>
                </div>
            </div>
        );
    }
}
