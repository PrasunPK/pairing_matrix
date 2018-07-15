import React from "react";
import {Grid, LinearProgress, Paper} from "@material-ui/core/es/index";

export default () => {
    return (
        <div className="mainContent">
            <Grid key="matrixContainer" container>
                {
                    [0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((value, index) => {
                        return <Grid key={`${value}${index}`} direction="row" container> {
                            [0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((value, index) => {
                                return <Grid key={`${index}Left`} item>
                                    <Paper className="ellipsis"
                                           style={{paddingTop: 20, paddingBottom: 9, height: 33, width: 80}}>
                                        <LinearProgress className="matrixStandardProgress"/>
                                    </Paper>
                                </Grid>
                            })
                        }
                        </Grid>
                    })
                }
            </Grid>
        </div>
    );
}