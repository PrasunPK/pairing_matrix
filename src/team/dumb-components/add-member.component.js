import React from "react";
import Dashboard from "@material-ui/icons/es/Dashboard";
import {Button, Grid, Paper, TextField, Typography} from "@material-ui/core/es/index";
import PermIdentity from "@material-ui/icons/PermIdentity";
import {Add, Email, Lock, Person} from "@material-ui/icons/es/index";


const AddMember = ({handleAddMemberClick, teamName}) => {

    return (
        <Grid item xs>
            <Paper className="addMember">
                <Typography variant="subheading" component="label">
                    Add Member for Team {teamName}
                </Typography>
                <Grid className="editTeamBlock">
                    <form noValidate autoComplete="off">
                        <Grid container className="inputInfo" spacing={8} alignItems="flex-end">
                            <Grid item>
                                <Dashboard/>
                            </Grid>
                            <Grid item>
                                <TextField className="teamInfoTextBox" id="input-with-name"
                                           label="Name" defaultValue='' onChange={() => {
                                }}/>
                            </Grid>
                        </Grid>

                        <Grid container className="inputInfo" spacing={8} alignItems="flex-end">
                            <Grid item>
                                <Email/>
                            </Grid>
                            <Grid item>
                                <TextField className="teamInfoTextBox" type="email" id="input-with-email"
                                           label="Email" defaultValue='' onChange={() => {
                                }}/>
                            </Grid>
                        </Grid>

                        <Grid container className="inputInfo" spacing={8} alignItems="flex-end">
                            <Grid item>
                                <PermIdentity/>
                            </Grid>
                            <Grid item>
                                <TextField className="teamInfoTextBox" type="email" id="input-with-id"
                                           label="Id" defaultValue='' onChange={() => {
                                }}/>
                            </Grid>
                        </Grid>

                        <Grid container className="inputInfo" spacing={8} alignItems="flex-end">
                            <Grid item>
                                <Person/>
                            </Grid>
                            <Grid item>
                                <TextField className="teamInfoTextBox" id="input-with-team-admin"
                                           label="Admin" defaultValue='' onChange={() => {
                                }}/>
                            </Grid>
                        </Grid>

                        <Grid container className="inputInfo" spacing={8} alignItems="flex-end">
                            <Grid item>
                                <Lock/>
                            </Grid>
                            <Grid item>
                                <TextField className="teamInfoTextBox" type="password" id="input-with-password"
                                           label="Password" defaultValue='' onChange={() => {
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