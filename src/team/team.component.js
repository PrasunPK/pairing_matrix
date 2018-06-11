import React from "react";
import EditTeam from './dumb-components/edit-team.component';
import ViewTeam from './dumb-components/view-team.component';

class TeamComponent extends React.Component {
    componentWillMount() {
        const {fetchTeamInformation} = this.props;
        fetchTeamInformation();
    }

    render() {
        const {
            handleChange, handleSaveClick, teams, team, selectedTeam,
            handleExistingSave, members, handleAddMemberClick, handleRemoveTeam,
            error
        } = this.props;
        let view = null;
        if (!team) {
            view = <EditTeam handleSaveClick={handleSaveClick} handleChange={handleChange} teams={teams}
                             selectedTeam={selectedTeam} handleExistingSave={handleExistingSave} error={error}/>;
        } else {
            view = <ViewTeam team={team} members={members} handleRemoveTeam={handleRemoveTeam}
                             handleAddMemberClick={handleAddMemberClick} error={error}/>;
        }
        return (
            <div className="mainContent">
                {view}
            </div>
        )
    }
}

export default TeamComponent;