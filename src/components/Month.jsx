import React from "react";
import "../css/Month.css"
import Day from "./Day";

export default class Month extends React.Component {
    constructor(props) {
        super(props);

        let year = 2019, month = 11;
        this.state = {
            countDays: new Date(year, month, 0).getDate(),
            firstDayOfWeek: new Date(year, month, 0).getDay()
        }
    }

    render() {
        const days = [], firstDay = this.state.firstDayOfWeek, countDays = this.state.countDays;


        for(let i = 0; i < firstDay; i++) {
            days.push(<Day key={i} hidden={true}/>)
        }

        for (let i = 0; i <= countDays; i++) {
            days.push(<Day key={i + firstDay} hidden={false}/>)
        }



        return (
            <div className="month-grid">
                {days}
            </div>
        );
    }
}