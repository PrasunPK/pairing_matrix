import React from 'react';
import Grid from 'material-ui/Grid';

import './App.css';
import members from "./data/members";
import Cell from "./Cell";

const Row = ({rowMember, handleAddClick, handleMinusClick, pIndex, pairs}) => {
    return (
        <Grid container direction="row">
            {
                members.map((member, cIndex) => (
                    <Cell rowMember={rowMember} member={member}
                          handleAddClick={handleAddClick}
                          handleMinusClick={handleMinusClick}
                          count={pairs[`${rowMember.id}_${member.id}`]}
                          pIndex={pIndex} cIndex={cIndex}/>
                ))
            }
        </Grid>
    );
};

export default Row;
