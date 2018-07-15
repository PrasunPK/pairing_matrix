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
            handleTeamChange, handleSaveClick, teams, team, selectedTeam,
            handleExistingSave, members, handleAddMemberClick, handleRemoveTeam,
            error, success, isLoading
        } = this.props;
        let view = null;
        if (!isLoading) {
            if (!team) {
                view = <EditTeam handleSaveClick={handleSaveClick} handleTeamChange={handleTeamChange} teams={teams}
                                 selectedTeam={selectedTeam} handleExistingSave={handleExistingSave} error={error}
                                 success={success}/>;
            } else {
                view = <ViewTeam team={team} members={members} handleRemoveTeam={handleRemoveTeam}
                                 handleAddMemberClick={handleAddMemberClick} error={error} success={success}/>;
            }
        }
        return (
            <div className="mainContent">
                {view}
            </div>
        )
    }
}

export default TeamComponent;