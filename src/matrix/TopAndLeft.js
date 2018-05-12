import React from 'react';
import Grid from 'material-ui/Grid';
import Paper from "material-ui/Paper";

import '../App.css';
import members from "../data/members";

const TopAndLeft = () => {
    return (
        <div className="topLeft">
            <Grid container>
                <Grid container direction="row">
                    {[{name: 'PI 29', id: 9}].concat(members).map(value => (
                        <Grid item>
                            <Paper style={{paddingTop: 25, paddingBottom: 10, height: 35, width: 80}}>
                                {value.name}
                            </Paper>
                        </Grid>
                    ))}
                </Grid>
                <Grid container direction="column">
                    {members.map(value => (
                        <Grid item>
                            <Paper style={{paddingTop: 20, paddingBottom: 9, height: 33, width: 80}}>
                                {value.name}
                            </Paper>
                        </Grid>
                    ))}
                </Grid>
            </Grid>
        </div>
    );
};

export default TopAndLeft;
