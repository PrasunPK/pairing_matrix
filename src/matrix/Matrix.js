import React from 'react';
import Grid from 'material-ui/Grid';
import Paper from "material-ui/Paper";

import '../App.css';
import Main from "./Main";

class Matrix extends React.Component {
    componentWillMount() {
        const {fetchLatestState, fetchAllTeamMembers} = this.props;
        fetchLatestState();
        fetchAllTeamMembers();
    }

    render() {
        const {handleAddClick, handleMinusClick, pairs, members} = this.props;
        return (
            <div className="mainContent">
                <Grid container>
                    <Grid container direction="row">
                        {[{memberName: 'PI', id: 9}].concat(members).map(value => (
                            <Grid item>
                                <Paper style={{paddingTop: 25, paddingBottom: 10, height: 35, width: 80}}>
                                    {value && value.memberName}
                                </Paper>
                            </Grid>
                        ))}
                    </Grid>
                    <Grid container direction="column">
                        {members && members.map(value => (
                            <Grid item>
                                <Paper style={{paddingTop: 20, paddingBottom: 9, height: 33, width: 80}}>
                                    {value && value.memberName}
                                </Paper>
                            </Grid>
                        ))}
                    </Grid>
                    <Main handleAddClick={handleAddClick}
                          handleMinusClick={handleMinusClick}
                          pairs={pairs} members={members}/>
                </Grid>
            </div>
        );
    };
}
export default Matrix;
