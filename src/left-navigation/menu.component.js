import React from 'react';
import {List, ListItem, ListItemIcon, Tooltip} from "@material-ui/core/es/index";
import PeopleIcon from "@material-ui/icons/People"
import GridIcon from "@material-ui/icons/GridOn"
import Home from "@material-ui/icons/es/Home";

export default () => {
    return (
        <div className="leftNav">
            <List component="nav" className="leftNav">
                <ListItem button component="a" href="/">
                    <ListItemIcon>
                        <Tooltip id="anchor-matrix-tooltip" title="Home" placement="right-start">
                            <Home/>
                        </Tooltip>
                    </ListItemIcon>
                </ListItem>

                <ListItem button component="a" href="/matrix">
                    <ListItemIcon>
                        <Tooltip id="anchor-matrix-tooltip" title="Matrix" placement="right-start">
                            <GridIcon/>
                        </Tooltip>
                    </ListItemIcon>
                </ListItem>

                <ListItem button component="a" href="/team">
                    <ListItemIcon>
                        <Tooltip id="anchor-team-tooltip" title="Team" placement="right-start">
                            <PeopleIcon/>
                        </Tooltip>
                    </ListItemIcon>
                </ListItem>
            </List>
        </div>
    );
};