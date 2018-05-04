import React from 'react';
import Grid from 'material-ui/Grid';
import Paper from "material-ui/Paper";

import './App.css';
import {names} from "./data";

const Row = ({name, index}) => {
    return (
        <Grid container direction="row">
            {
                names.map((value, i) => (
                    <Grid key={value} item>
                        <Paper style={{paddingTop: 20, paddingBottom: 9, height: 33, width: 80}}>
                            {`${i} ${index}`}
                        </Paper>
                    </Grid>
                ))
            }
        </Grid>
    );
};

export default Row;
