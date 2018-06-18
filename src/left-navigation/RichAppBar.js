import classNames from "classnames";
import MenuIcon from '@material-ui/icons/Menu';
import {AppBar, IconButton, LinearProgress, Toolbar, Typography} from "@material-ui/core/es/index";
import React from "react";

const RichAppBar = ({classes, team}) => {
    return (
        <AppBar
            position="absolute"
            className={classNames(classes.appBar)}
        >
            <Toolbar disableGutters={true}>
                <IconButton
                    color="inherit"
                    aria-label="open drawer"
                    className={classNames(classes.menuButton)}
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
};

export default RichAppBar;