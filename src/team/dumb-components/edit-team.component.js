import Dashboard from "@material-ui/icons/es/Dashboard";
import React from "react";
import Email from "@material-ui/icons/es/Email";
import Save from "@material-ui/icons/es/Save";
import ChooseFromExisting from "./chooseFromExisting.component"
import {Button, FormHelperText, Grid, Paper, TextField, Typography} from "@material-ui/core/es/index";

const belongsToCurrentComponent = (error) => {
    return error && error.context === "add_team";
};
const EditComponent = ({handleTeamChange, handleSaveClick, teams, selectedTeam, handleExistingSave, error, success}) => {
    return (
        <Grid container direction="column" className="contentWrapper">
            <ChooseFromExisting teams={teams} selectedTeam={selectedTeam} handleTeamChange={handleTeamChange}
                                handleExistingSave={handleExistingSave}/>
            <Grid className="editTeamBlock">
                <Paper className="allTeamDetail">
                    <Typography variant="subheading" component="label">
                        Create new team
                    </Typography>
                    <FormHelperText id="add-team-error-text" className="errorText">
                        {belongsToCurrentComponent(error) && error.message}
                    </FormHelperText>
                    <form noValidate autoComplete="off">
                        <Grid container className="inputInfo" spacing={8} alignItems="flex-end">
                            <Grid item>
                                <Dashboard/>
                            </Grid>
                            <Grid item>
                                <TextField required className="teamInfoTextBox" id="input-with-team-name"
                                           label="Team name" defaultValue="" onChange={() => {
                                }}/>
                            </Grid>
                        </Grid>

                        <Grid container className="inputInfo" spacing={8} alignItems="flex-end">
                            <Grid item>
                                <Email/>
                            </Grid>
                            <Grid item>
                                <TextField required className="teamInfoTextBox" type="email" id="input-with-team-email"
                                           label="Team email" defaultValue='' onChange={() => {
                                }}/>
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