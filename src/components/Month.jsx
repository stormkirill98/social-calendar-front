import React from "react";
import "../css/Month.css"
import Day from "./Day";

export default class Month extends React.Component {
    constructor(props) {
        super(props);

        let year = 2019, month = 11;
        this.state = {
            countDays: new Date(year, month, 0).getDate(),
            firstDayOfWeek: new Date(year, month, 0).getDay(),
            events: {
                1: [
                    {
                        id: "12441",
                        type: "group",
                        name: "First Event",
                        is_private: "true",
                        datetime: "23.11.2019 19:00",
                        address: "address",
                        description: "desciption fasadsa",
                        icon: "ss"
                    },
                    {
                        id: "12441",
                        type: "group",
                        name: "Second Event",
                        is_private: "true",
                        datetime: "23.11.2019 19:00",
                        address: "address",
                        description: "desciption fasadsa"
                    }
                ],
            }
        }
    }

    render() {
        const days = [], firstDay = this.state.firstDayOfWeek, countDays = this.state.countDays;


        for (let i = 0; i < firstDay; i++) {
            days.push(<Day key={-i} hidden={true}/>)
        }

        for (let i = 0; i <= countDays; i++) {
            days.push(<Day key={i + 1} hidden={false} day={i + 1} events={this.state.events[i + 1]}/>)
        }


        return (
            <div className="month-grid">
                {days}
            </div>
        );
    }
}