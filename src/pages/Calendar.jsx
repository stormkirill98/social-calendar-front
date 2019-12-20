import React from "react";
import Header from "../components/Header";
import Month from "../components/Month";
import EventList from "../components/EventList";
import "../css/Calendar.css"

export default class Calendar extends React.Component {
    render() {
        return (
            <div className="page-container">
                <Header/>
                <div className="calendar-container">
                    <Month/>
                    <EventList/>
                </div>
            </div>
        );
    }
}