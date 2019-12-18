import React from "react";
import Avatar from 'react-avatar';
import Grid from "@material-ui/core/Grid";
import {Card} from "@material-ui/core";
import "./css/UserCard.css"
import Typography from "@material-ui/core/Typography";
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';
import SettingsIcon from '@material-ui/icons/Settings';
import Button from "@material-ui/core/Button";
import NotificationList from "./NotificationList";

export default class UserCard extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            invoices: [{info: "asdasdasdas dasd as dasdasdasd"}, {info: "asdasdasdas dasd as dasdasdasd"},
                {info: "asdasdasdas dasd as dasdasdasd"}, {info: "asdasdasdas dasd as dasdasdasd"}],
            userName: "Kirill Panihin",
            pictureUrl: "https://lh3.googleusercontent.com/a-/AAuE7mAd99fGmysqUPELQf17X25h6P_Ovketo5vlsncv"
        };
    }

    toggleNotifications() {

    }

    render() {
        return (
            <Grid container>
                <Avatar alt={this.state.userName} size="55" round={true} src={this.state.pictureUrl}/>
                <Grid item className="user-info">
                    <Card className="user-name">
                        <Typography className="card-title" color="textSecondary" gutterBottom>
                            {this.state.userName}
                        </Typography>
                    </Card>
                    <div className="buttons">
                        <Button variant="contained" color="primary" className="notifications-btn" size="small"
                                onClick={this.toggleNotifications()}>
                            {this.state.invoices.length}
                            <NotificationsNoneIcon fontSize="small"/>
                        </Button>

                        <Button variant="contained" color="primary" className="settings-btn" size="small">
                            <SettingsIcon fontSize="small"/>
                        </Button>
                    </div>
                </Grid>
                <NotificationList/>
            </Grid>
        );
    }
}
