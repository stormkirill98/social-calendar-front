import React from "react";
import Header from "../components/Header";
import Month from "../components/Month";
import EventList from "../components/EventList";

export default class Calendar extends React.Component {
    render() {
        return (
            <>
                <Header/>
                <Month/>
                <EventList/>
            </>
        );
    }
}