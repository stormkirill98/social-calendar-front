import React from "react";
import "../css/Month.css"
import Day from "./Day";

import Icon1 from "../SVG_icon/burger.svg"
import Icon2 from "../SVG_icon/coctail.svg"


export default class Month extends React.Component {
    constructor(props) {
        super(props);

        let year = 2019, month = 12;

        console.log(new Date(year, month - 1, 1));
        console.log(monthDays(year, month));
        console.log(firstWeekDay(year, month));

        this.state = {
            countDays: monthDays(year, month),
            firstDayOfWeek: firstWeekDay(year, month),
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
                        icon: Icon1
                    },
                    {
                        id: "12441",
                        type: "group",
                        name: "Second Event",
                        is_private: "true",
                        datetime: "23.11.2019 19:00",
                        address: "address",
                        description: "desciption fasadsa",
                        icon: Icon2
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

        for (let i = 0; i < countDays; i++) {
            days.push(<Day key={i + 1} hidden={false} day={i + 1} events={this.state.events[i + 1]}/>)
        }


        return (
            <div className="month-grid">
                {days}
            </div>
        );
    }
}

function monthDays(y, m)    // full year and month in range 1-12
{
    let leap = 0;
    if (m === 2) {
        if (y % 4 === 0) leap = 1;
        if (y % 100 === 0) leap = 0;
        if (y % 400 === 0) leap = 1;
    }
    return [0, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31][m] + leap;
}

function firstWeekDay(y, m) {
    const days = [7, 1, 2, 3, 4, 5, 6];
    return new Date(y, m - 1, 0).getDay();
}