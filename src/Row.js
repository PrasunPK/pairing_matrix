import React from 'react';
import Grid from 'material-ui/Grid';

import './App.css';
import members from "./data/members";
import Cell from "./Cell";

const Row = ({rowMember, handleAddClick, count}) => {
    return (
        <Grid container direction="row">
            {
                members.map((member) => (
                    <Cell rowMember={rowMember} member={member}
                          handleAddClick={handleAddClick} count={count}/>
                ))
            }
        </Grid>
    );
};

export default Row;
