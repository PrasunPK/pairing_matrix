import React from 'react';

import '../App.css';
import Matrix from "./dumb-components/matrix";
import {Grid, Paper} from "@material-ui/core/es/index";

class MatrixComponent extends React.Component {
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
                    <Matrix handleAddClick={handleAddClick}
                            handleMinusClick={handleMinusClick}
                            pairs={pairs} members={members}/>
                </Grid>
            </div>
        );
    };
}

export default MatrixComponent;
