import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import {Divider, List, ListItem, ListItemIcon, Tooltip} from "@material-ui/core/es/index";
import PeopleIcon from "@material-ui/icons/People"
import GridIcon from "@material-ui/icons/GridOn"

const styles = theme => ({
    root: {
        width: '100%',
        maxWidth: 360,
        backgroundColor: theme.palette.background.paper,
    },
});

const SimpleList = (props) => {
    const {classes} = props;
    return (
        <div className={classes.root}>
            <List component="nav">
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
            <Divider/>
        </div>
    );
};

SimpleList.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleList);
