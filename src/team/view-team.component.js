import React from "react";
import Typography from "material-ui/es/Typography/Typography";
import TeamMembers from "./team-members.component";
import AddMember from "./add-member.component";
import Grid from "material-ui/es/Grid/Grid";
import Paper from "material-ui/es/Paper/Paper";

const ViewTeam = ({team, members, handleAddMemberClick}) => {
    return (
        <div className="viewTeamDetail">
            <Grid container spacing={24} direction="row">
                <Grid item>
                    <Grid>
                        <Paper className="teamInfo">
                            <Typography variant="headline" component="h4">
                                Team {team && team.teamName}
                            </Typography>
                            <Typography variant="subheading">
                                {team && team.teamEmail}
                            </Typography>
                        </Paper>
                    </Grid>
                    <Grid>
                        <TeamMembers members={members}/>
                    </Grid>
                </Grid>
                <Grid item xs className="addMemberBlock">
                    <AddMember teamName={team && team.teamName} handleAddMemberClick={handleAddMemberClick}/>
                </Grid>
            </Grid>
        </div>
    )
};

export default ViewTeam;