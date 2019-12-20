import React from "react";
import "../css/EventIcon.css"

export default class EventIcon extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            name: props.name,
            icon: props.icon,
            time: props.time
        }
    }

    render() {
        console.log(this.state.name);
        console.log(this.state.icon);
        console.log(this.state.time);

        return (
            <div>
                {this.state.icon ?
                    <img className="event-icon" src={require("../SVG_icon/burger.svg")} width={35} height={35} alt="icon"/> : ''}
            </div>
        );
    }
}