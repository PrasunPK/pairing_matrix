import React from "react";
import EditTeam from './edit-team.component';
import ViewTeam from './view-team.component';

class TeamComponent extends React.Component {
    componentWillMount() {
        const {fetchTeamInformation} = this.props;
        fetchTeamInformation();
    }

    render() {
        const {
            handleChange, handleSaveClick, teams, team, selectedTeam,
            handleExistingSave, members, handleAddMemberClick
        } = this.props;
        let view = null;
        if (!team) {
            view = <EditTeam handleSaveClick={handleSaveClick} handleChange={handleChange} teams={teams}
                             selectedTeam={selectedTeam} handleExistingSave={handleExistingSave}/>;
        } else {
            view = <ViewTeam team={team} members={members} handleAddMemberClick={handleAddMemberClick}/>;
        }
        return (
            <div className="mainContent">
                {view}
            </div>
        )
    }
}

export default TeamComponent;