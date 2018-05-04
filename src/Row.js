import React from 'react';
import Grid from 'material-ui/Grid';
import Paper from "material-ui/Paper";

import './App.css';
import {members} from "./data";
import IconButton from "material-ui/es/IconButton/IconButton";

const Row = ({name, index}) => {
    return (
        <Grid container direction="row">
            {
                members.map((value, i) => (
                    <Grid key={value} item>
                        <Paper style={{paddingTop: 20, paddingBottom: 9, height: 33, width: 80}}>
                            <div className="pair-value">
                                {`${i} ${index}`}
                            </div>
                            <div className="fab-action-icons">
                                <IconButton className="fab-action-button add-button"> + </IconButton>
                                <IconButton className="fab-action-button minus-button"> - </IconButton>
                            </div>
                        </Paper>

                    </Grid>
                ))
            }
        </Grid>
    );
};

export default Row;
