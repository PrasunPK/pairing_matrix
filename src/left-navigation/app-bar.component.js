import {AppBar, IconButton, LinearProgress, Toolbar, Typography} from "@material-ui/core/es/index";
import React from "react";
import Notifications from "@material-ui/icons/es/Notifications";
import moment from 'moment';

export default class extends React.Component {
    componentDidMount() {
        const {fetchTeamInformation, fetchLastUpdatedTime} = this.props;
        fetchTeamInformation();
        fetchLastUpdatedTime();
    }

    render() {
        const {team, isLoading, lastUpdatedTime} = this.props;
        return (
            <AppBar position="absolute">
                <Toolbar disableGutters={true}>
                    <Typography variant="title" color="inherit" className="appBarTeamName" noWrap>
                        {
                            isLoading
                                ? <div className="loader">
                                    <LinearProgress className="standardProgress"/>
                                </div>
                                : team
                                ? `Team ${team.teamName}`
                                : `Welcome`
                        }
                    </Typography>
                    <div className="notificationCorner">
                        <Typography variant="caption" color="inherit" noWrap>
                            {lastUpdatedTime ? `Last updated at: ${moment(lastUpdatedTime).format('DD-MM-YYYY HH:MM:SS')}` : ''}
                        </Typography>
                        <IconButton
                            aria-haspopup="true"
                            color="inherit"
                        >
                            <Notifications/>
                        </IconButton>
                    </div>
                </Toolbar>
            </AppBar>)
    }
};