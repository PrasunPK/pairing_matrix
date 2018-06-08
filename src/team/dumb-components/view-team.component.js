import React from "react";
import TeamMembers from "./team-members.component";
import AddMember from "./add-member.component";
import Delete from "@material-ui/icons/es/Delete";
import {Button, Grid, Paper, Typography} from "@material-ui/core/es/index";

const ViewTeam = ({team, members, handleAddMemberClick, handleRemoveTeam}) => {
    return (
        <div className="viewTeamDetail">
            <Grid container spacing={24} direction="row">
                <Grid item>
                    <Grid className="teamInfoWrapper">
                        <Paper className="teamInfo">
                            <Grid container spacing={24} direction="row">
                                <Grid>
                                    <Typography variant="headline" component="h4">
                                        Team {team && team.teamName}
                                    </Typography>
                                    <Typography variant="subheading">
                                        {team && team.teamEmail}
                                    </Typography>
                                </Grid>
                                <Grid>
                                    <Button className="saveInfoButton" color="secondary" variant="raised" size="small"
                                            id="remove-team-button" onClick={handleRemoveTeam}>
                                        <Delete/>
                                        Remove
                                    </Button>
                                </Grid>
                            </Grid>
                        </Paper>
                    </Grid>
                    <Grid item xs className="addMemberBlock">
                        <AddMember teamName={team && team.teamName} handleAddMemberClick={handleAddMemberClick}/>
                    </Grid>
                </Grid>
                <Grid className="addMemberBlock">
                    <TeamMembers members={members}/>
                </Grid>

            </Grid>
        </div>
    )
};

export default ViewTeam;