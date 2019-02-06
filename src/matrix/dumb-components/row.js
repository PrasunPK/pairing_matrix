import React from 'react';

import '../../App.css';
import Cell from "./cell";
import {Grid} from "@material-ui/core/es/index";

const getPair = (pMember, cMember, pairs) => {
    let pair = pairs && pairs
        .filter((p) => {
            return (p.pair1 === pMember.memberId && p.pair2 === cMember.memberId)
                || (p.pair2 === pMember.memberId && p.pair1 === cMember.memberId)
        });
    return (pair && pair.length > 0) ? pair[0] : {days: 0, normDays: 0};
};

const Row = ({rowMember, handleAddClick, handleMinusClick, pIndex, pairs, members}) => {
    return (
        <Grid container key={`${pIndex}Row`} direction="row">
            {
                
                members.map((member, cIndex) => {
                    const pair = getPair(rowMember, member, pairs);
                    return (
                        <Cell key={`${cIndex}CellWrapper`} rowMember={rowMember} member={member}
                              handleAddClick={handleAddClick}
                              handleMinusClick={handleMinusClick}
                              count={pair.days}
                              normDays={pair.normDays}
                              pIndex={pIndex} cIndex={cIndex}/>
                    )
                })
            }
        </Grid>
    );
};

export default Row;
