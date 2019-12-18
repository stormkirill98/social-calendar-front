import React from "react";
import Button from "@material-ui/core/Button";
import CloseIcon from '@material-ui/icons/Close';
import CheckIcon from '@material-ui/icons/Check';

export default class NotificationList extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            invite: {
                id: 1012313,
                type: "friend",
                sender_id: 12341,
                sender_name: "Vasya Pupkin"
            }
        };
    }

    render() {
        const invite = this.state.invite;
        let content = "";
        if (invite.type === "friend") {
            content = invite.sender_name + " будет вашим другом?";
        } else {
            content = "Присоединитесь на " + invite.event_name + "?";
        }

            return (
                <div className="container">
                    <div className="type">{invite.type}</div>
                    <div className="content">{content}</div>
                    <Button variant="contained" color="secondary" size={"small"} className={"decline-btn"}>
                        <CloseIcon fontSize={"small"}/>
                    </Button>
                    <Button variant="contained" color="primary" size={"small"} className={"accept-btn"}>
                        <CheckIcon fontSize={"small"}/>
                    </Button>
                </div>
            );
    }
}