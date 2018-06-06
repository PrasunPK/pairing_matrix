import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from 'material-ui/styles';
import List, {ListItem, ListItemIcon, ListItemText} from 'material-ui/List';
import Divider from 'material-ui/Divider';
import GridIcon from '@material-ui/icons/GridOn';
import PeopleIcon from '@material-ui/icons/People';

const styles = theme => ({
    root: {
        width: '100%',
        maxWidth: 360,
        backgroundColor: theme.palette.background.paper,
    },
});

const SimpleList =  (props) => {
    const {classes} = props;
    return (
        <div className={classes.root}>
            <List component="nav">
                <ListItem button component="a" href="/matrix">
                    <ListItemIcon>
                        <GridIcon/>
                    </ListItemIcon>

                    <ListItemText primary="Matrix"/>
                </ListItem>

                <ListItem button component="a" href="/team">
                    <ListItemIcon>
                        <PeopleIcon/>
                    </ListItemIcon>
                    <ListItemText primary="Team"/>
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
