import React from "react";
import EditTeam from './edit-team.component';
import ViewTeam from './view-team.component';

const TeamComponent = ({handleChange, handleSaveClick, team}) => {
    let view = null;
    if (!team) {
        view = <EditTeam handleSaveClick={handleSaveClick} handleChange={handleChange}/>;
    } else {
        view = <ViewTeam team={team}/>;
    }
    return (
        <div className="mainContent">
            {view}
        </div>
    )
};

export default TeamComponent;