import React from "react";
import "../css/Day.css"

export default class Header extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            events: props.events
        }
    }

    render() {
        const style = {
            visibility: this.props.hidden ? 'hidden' : 'visible',
        };

        return (
            <div className="day-plate" style={style}>
                {this.props.day}
            </div>
        );
    }
}