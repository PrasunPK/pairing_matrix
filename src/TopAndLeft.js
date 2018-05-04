import React from 'react';
import Grid from 'material-ui/Grid';
import Paper from "material-ui/Paper";

import './App.css';
import {names} from "./data";

const TopAndLeft = () => {
    return (
        <Grid container>
            <Grid container direction="row">
                {['PI 29'].concat(names).map(value => (
                    <Grid key={value} item>
                        <Paper style={{paddingTop: 25, paddingBottom: 10, height: 35, width: 80}}>
                            {value}
                        </Paper>
                    </Grid>
                ))}
            </Grid>
            <Grid container direction="column">
                {names.map(value => (
                    <Grid key={value} item>
                        <Paper style={{paddingTop: 20, paddingBottom: 9, height: 33, width: 80}}>
                            {value}
                        </Paper>
                    </Grid>
                ))}
            </Grid>
        </Grid>
    );
};

export default TopAndLeft;
