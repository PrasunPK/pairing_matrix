import {Grid, LinearProgress, Paper, Table, TableBody, TableCell, TableRow} from "@material-ui/core/es/index";
import React from "react";

export default () => {
    return (
        <Grid container spacing={16} direction="row">
            <Grid className="teamInfoWrapper editTeamBlock">
                <Paper className="allTeamDetail">
                    <div className="loadingTeam">
                        <LinearProgress className="otherStandardProgress"/>
                    </div>
                </Paper>

                <Paper className="allTeamDetail addMemberLoader">
                    <div className="loadingTeam">
                        <LinearProgress className="otherStandardProgress"/>
                    </div>

                    <div className="loadingCreateMember">
                        <LinearProgress className="otherStandardProgress"/>
                    </div>

                    <div className="loadingCreateMember">
                        <LinearProgress className="otherStandardProgress"/>
                    </div>
                </Paper>
            </Grid>
            <Grid className="allMemberBlock">
                <Grid className="allMemberBlockLoading">
                    <Paper className="">
                        <Table className="">
                            <TableBody>
                                {[1, 2, 3, 4, 5, 6, 7].map((value, index) => {
                                    return (
                                        <TableRow key={index}>
                                            <TableCell scope="row">
                                                <LinearProgress className="otherStandardProgress"/> </TableCell>
                                            <TableCell>
                                                <LinearProgress className="otherStandardProgress"/>
                                            </TableCell>
                                            <TableCell>
                                                <LinearProgress className="otherStandardProgress"/>
                                            </TableCell>
                                        </TableRow>
                                    );
                                })}
                            </TableBody>
                        </Table>
                    </Paper>
                </Grid>
            </Grid>
        </Grid>
    )
}