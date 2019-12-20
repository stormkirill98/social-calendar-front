import React from "react";
import "../css/Day.css"

export default class Header extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            hidden: props.hidden
        }
    }

    render() {
        return (
            <div className="day-plate" style={this.state.hidden ? {visibility: 'hidden'} : {}}>

            </div>
        );
    }
}