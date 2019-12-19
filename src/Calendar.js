import React from "react";
import Header from "./Header";
import Month from "./Month";
import EventList from "./EventList";

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