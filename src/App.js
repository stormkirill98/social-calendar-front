import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Friends from "./pages/Friends";
import Dialogues from "./pages/Dialogues";
import Event from "./pages/Event";
import Login from "./pages/Login"
import Calendar from "./pages/Calendar"

export default class Routing extends React.Component {
    render() {
        return (
            <Router>
                <Switch>
                    <Route path="/Calendar" component={Calendar} />
                    <Route path="/Eventid=:id" component={Event} />
                    <Route path="/Event" component={Event} />
                    <Route path="/Dialogues" component={Dialogues} />
                    <Route path="/Friends" component={Friends} />
                    <Route path="/" component={Login} />
                </Switch>
            </Router>
        );
    }
}
