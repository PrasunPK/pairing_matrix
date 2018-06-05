import React from 'react';
import Grid from 'material-ui/Grid';

import '../App.css';
import Cell from "./Cell";

const getDaysCount = (pMember, cMember, pairs) => {
    let pair = pairs && pairs
        .filter((p) => {
            return (+p.pair1 === pMember.id && +p.pair2 === cMember.id)
                || (+p.pair2 === pMember.id && +p.pair1 === cMember.id)
        });
    return (pair && pair.length > 0) ? pair[0].days : 0;
};

const Row = ({rowMember, handleAddClick, handleMinusClick, pIndex, pairs, members}) => {
    return (
        <Grid container direction="row">
            {
                members.map((member, cIndex) => {
                    return (
                        <Cell rowMember={rowMember} member={member}
                              handleAddClick={handleAddClick}
                              handleMinusClick={handleMinusClick}
                              count={getDaysCount(rowMember, member, pairs)}
                              pIndex={pIndex} cIndex={cIndex}/>
                    )
                })
            }
        </Grid>
    );
};

export default Row;
