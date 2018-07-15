import MenuIcon from '@material-ui/icons/Menu';
import {AppBar, IconButton, LinearProgress, Toolbar, Typography} from "@material-ui/core/es/index";
import React from "react";

export default class extends React.Component {
    componentDidMount() {
        const {fetchTeamInformation} = this.props;
        fetchTeamInformation();
    }

    render() {
        const {team, isLoading} = this.props;
        return (
            <AppBar position="absolute">
                <Toolbar disableGutters={true}>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                    >
                        <MenuIcon className="menuIcon"/>
                    </IconButton>
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
                </Toolbar>
            </AppBar>)
    }
};