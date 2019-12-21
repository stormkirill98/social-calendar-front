import React from "react";
import Header from "../components/Header";
import Month from "../components/Month";
import EventList from "../components/EventList";
import "../css/Calendar.css"

export default class Calendar extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            curYear: 2019,
            curMonth: 12
        }
    }

    render() {
        return (
            <div className="page-container">
                <Header />

                <div className="flex-row calendar-main">
                    <Month year={this.state.curYear} month={this.state.curMonth} />
                    <EventList />
                </div>
            </div>
        );
    }
}