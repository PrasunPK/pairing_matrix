import React from 'react';
import Grid from 'material-ui/Grid';

import '../App.css';
import Row from "./Row";

class Main extends React.Component {
    componentWillMount() {
        const { fetchLatestState, fetchAllTeamMembers } = this.props;
        fetchLatestState();
        fetchAllTeamMembers();
    }

    render() {
        const {handleAddClick, handleMinusClick, pairs, members} = this.props;
        console.log("Members in Main: ", members);
        return (
            <Grid container className="main-content">
                {
                    members && members.map((member, pIndex) => (
                        <Row pairs={pairs} pIndex={pIndex} members={members}
                             rowMember={member}
                             handleAddClick={handleAddClick}
                             handleMinusClick={handleMinusClick}/>
                    ))
                }
            </Grid>
        );
    }
}

export default Main;
