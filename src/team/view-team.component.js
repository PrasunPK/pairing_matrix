import React from "react";
import Typography from "material-ui/es/Typography/Typography";

const ViewTeam = ({team}) => {
    return (
        <div className="viewTeamDetail">
            <Typography variant="headline" component="h4">
                Team {team && team.teamName}
            </Typography>
            <Typography variant="subheading">
                {team && team.teamEmail}
            </Typography>
        </div>
    )
};

export default ViewTeam;