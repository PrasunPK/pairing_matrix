import React from "react";
import {Grid, TextField} from "material-ui";
import Email from "@material-ui/icons/es/Email";
import Dashboard from "@material-ui/icons/es/Dashboard";
import Person from "@material-ui/icons/es/Person";
import Lock from "@material-ui/icons/es/Lock";
import Button from "material-ui/es/Button/Button";
import Save from "@material-ui/icons/es/Save";

const TeamComponent = ({handleChange, handleSaveClick}) => {
    return (
        <div className="mainContent">
            <Grid container>
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
            </Grid>
        </div>
    )
};

export default TeamComponent;