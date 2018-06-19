import MenuIcon from '@material-ui/icons/Menu';
import {AppBar, IconButton, LinearProgress, Toolbar, Typography} from "@material-ui/core/es/index";
import React from "react";

export default class extends React.Component {
    componentDidMount() {
        const {fetchTeamInformation} = this.props;
        fetchTeamInformation();
    }

    render(){
        const {team} = this.props;
        return (
            <AppBar position="absolute">
                <Toolbar disableGutters={true}>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                    >
                        <MenuIcon/>
                    </IconButton>
                    <Typography variant="title" color="inherit" className="appBarTeamName" noWrap>
                        {
                            !team
                                ? <div className="loader">
                                    <LinearProgress className="standardProgress"/>
                                </div>
                                : `Team ${team.teamName}`
                        }
                    </Typography>
                </Toolbar>
            </AppBar>)
    }
};