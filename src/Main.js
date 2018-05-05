import React from 'react';
import Grid from 'material-ui/Grid';

import './App.css';
import members from "./data/members";
import Row from "./Row";

class Main extends React.Component {
    render() {
        const {handleAddClick, pairs} = this.props;
        return (
            <Grid container className="main-content">
                {
                    members.map((member, pIndex) => (
                        <Row pairs={pairs} pIndex={pIndex}
                             rowMember={member} handleAddClick={handleAddClick}/>
                    ))
                }
            </Grid>
        );
    }
}

export default Main;
