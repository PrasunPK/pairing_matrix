import React from 'react';

import '../App.css';
import Matrix from "./dumb-components/matrix";
import MatrixLoading from "./dumb-components/matrix-loading.component";
import {Grid, Paper} from "@material-ui/core/es/index";

class MatrixComponent extends React.Component {
    componentWillMount() {
        const {fetchLatestState, fetchAllTeamMembers} = this.props;
        fetchLatestState();
        fetchAllTeamMembers();
    }

    render() {
        const {handleAddClick, handleMinusClick, pairs, members, isLoading} = this.props;
        return (
            !isLoading
                ? <div className="mainContent">
                    <Grid key="matrixContainer" container>
                        <Grid container key="headerRows" direction="row">
                            {[{memberName: 'PI', id: 9}].concat(members).map((value, index) => (
                                <Grid item key={`${index}Top`}>
                                    <Paper className="ellipsis"
                                           style={{paddingTop: 25, paddingBottom: 10, height: 35, width: 80}}>
                                        {value && value.memberName}
                                    </Paper>
                                </Grid>
                            ))}
                        </Grid>
                        <Grid container key="headerColumns" direction="column">
                            {members && members.map((value, index) => (
                                <Grid key={`${index}Left`} item>
                                    <Paper className="ellipsis"
                                           style={{paddingTop: 20, paddingBottom: 9, height: 33, width: 80}}>
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
                : <MatrixLoading/>
        );
    };
}

export default MatrixComponent;
