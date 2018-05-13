import React from "react";
import Typography from "material-ui/es/Typography/Typography";
import TeamMembers from "./team-members.component";

const ViewTeam = ({team}) => {
    return (
        <div className="viewTeamDetail">
            <Typography variant="headline" component="h4">
                Team {team && team.teamName}
            </Typography>
            <Typography variant="subheading">
                {team && team.teamEmail}
            </Typography>
            <TeamMembers/>
        </div>
    )
};

export default ViewTeam;