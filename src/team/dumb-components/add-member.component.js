import React from "react";
import Dashboard from "@material-ui/icons/es/Dashboard";
import {Button, FormHelperText, Grid, Paper, TextField, Typography} from "@material-ui/core/es/index";
import PermIdentity from "@material-ui/icons/PermIdentity";
import {Add, Email} from "@material-ui/icons/es/index";


const AddMember = ({handleAddMemberClick, teamName, errorMessage}) => {

    return (
        <Grid item xs>
            <Paper className="addMember">
                <Typography variant="subheading" component="label">
                    Add Member for Team {teamName}
                </Typography>

                <FormHelperText id="add-member-error-text">{errorMessage}</FormHelperText>

                <Grid className="editTeamBlock">
                    <form autoComplete="off">
                        <Grid container className="inputInfo" spacing={8} alignItems="flex-end">
                            <Grid item>
                                <Dashboard/>
                            </Grid>
                            <Grid item>
                                <TextField required className="teamInfoTextBox" id="input-with-name"
                                           label="Name" defaultValue='' onChange={() => {
                                }}/>
                            </Grid>
                        </Grid>

                        <Grid container className="inputInfo" spacing={8} alignItems="flex-end">
                            <Grid item>
                                <Email/>
                            </Grid>
                            <Grid item>
                                <TextField required className="teamInfoTextBox" type="email" id="input-with-email"
                                           label="Email" defaultValue='' onChange={() => {
                                }}/>
                            </Grid>
                        </Grid>

                        <Grid container className="inputInfo" spacing={8} alignItems="flex-end">
                            <Grid item>
                                <PermIdentity/>
                            </Grid>
                            <Grid item>
                                <TextField required className="teamInfoTextBox" type="email" id="input-with-id"
                                           label="Id" defaultValue='' onChange={() => {
                                }}/>
                            </Grid>
                        </Grid>

                        <Grid container className="inputInfo" spacing={8} alignItems="flex-end">
                            <Button className="saveInfoButton" color="primary" variant="raised" size="medium"
                                    id="add-team-member-button" onClick={handleAddMemberClick}>
                                <Add/>
                                Add
                            </Button>
                        </Grid>
                    </form>
                </Grid>
            </Paper>
        </Grid>

    );
};
export default AddMember;