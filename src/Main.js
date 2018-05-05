import React from 'react';
import Grid from 'material-ui/Grid';

import './App.css';
import members from "./data/members";
import Row from "./Row";

const Main = ({handleAddClick, count}) => {
    return (
        <Grid container className="main-content">
            {
                members.map((member, pIndex) => (
                    <Row count={count} pIndex={pIndex} rowMember={member} handleAddClick={handleAddClick}/>
                ))
            }
        </Grid>
    );
};

export default Main;
