import React from "react";
import Notification from "./Notification";

export default class NotificationList extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            invites: [{info: "asdasdasdas dasd as dasdasdasd"}, {info: "asdasdasdas dasd as dasdasdasd"},
                {info: "asdasdasdas dasd as dasdasdasd"}, {info: "asdasdasdas dasd as dasdasdasd"}]
        };
    }

    render() {
        const listItems = this.state.invites.map((d) => <Notification>{d.info}</Notification>);

        return (
            <div>
                {listItems}
            </div>
        );
    }
}