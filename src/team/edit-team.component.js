import Grid from "material-ui/es/Grid/Grid";
import Dashboard from "@material-ui/icons/es/Dashboard";
import {Paper, TextField, Typography} from "material-ui";
import React from "react";
import Email from "@material-ui/icons/es/Email";
import Person from "@material-ui/icons/es/Person";
import Lock from "@material-ui/icons/es/Lock";
import Button from "material-ui/es/Button/Button";
import Save from "@material-ui/icons/es/Save";
import ChooseFromExisting from "./chooseFromExisting.component"

const EditComponent = ({handleChange, handleSaveClick, teams, selectedTeam}) => {
    return (
        <Grid container direction="column">
            <ChooseFromExisting teams={teams} selectedTeam={selectedTeam} handleChange={handleChange}/>
            <Grid className="editTeamBlock">
                <Paper className="allTeamDetail">
                    <Typography variant="subheading" component="label">
                        Create new team
                    </Typography>
                    <form noValidate autoComplete="off">
                        <Grid container className="inputInfo" spacing={8} alignItems="flex-end">
                            <Grid item>
                                <Dashboard/>
                            </Grid>
                            <Grid item>
                                <TextField className="teamInfoTextBox" id="input-with-team-name"
                                           label="Team name" defaultValue='' onChange={handleChange}/>
                            </Grid>
                        </Grid>

                        <Grid container className="inputInfo" spacing={8} alignItems="flex-end">
                            <Grid item>
                                <Email/>
                            </Grid>
                            <Grid item>
                                <TextField className="teamInfoTextBox" type="email" id="input-with-team-email"
                                           label="Team email" defaultValue='' onChange={handleChange}/>
                            </Grid>
                        </Grid>

                        <Grid container className="inputInfo" spacing={8} alignItems="flex-end">
                            <Grid item>
                                <Person/>
                            </Grid>
                            <Grid item>
                                <TextField className="teamInfoTextBox" id="input-with-team-admin"
                                           label="Admin" defaultValue='' onChange={handleChange}/>
                            </Grid>
                        </Grid>

                        <Grid container className="inputInfo" spacing={8} alignItems="flex-end">
                            <Grid item>
                                <Lock/>
                            </Grid>
                            <Grid item>
                                <TextField className="teamInfoTextBox" type="password" id="input-with-password"
                                           label="Password" defaultValue='' onChange={handleChange}/>
                            </Grid>
                        </Grid>

                        <Grid container className="inputInfo" spacing={8} alignItems="flex-end">
                            <Button className="saveInfoButton" color="primary" variant="raised" size="medium"
                                    id="save-team-detail-button" onClick={handleSaveClick}>
                                <Save/>
                                Save
                            </Button>
                        </Grid>
                    </form>
                </Paper>
            </Grid>
        </Grid>
    )
};

export default EditComponent;