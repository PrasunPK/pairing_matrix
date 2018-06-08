import React from 'react';

import '../../App.css';
import Cell from "./cell";
import {Grid} from "@material-ui/core/es/index";

const getDaysCount = (pMember, cMember, pairs) => {
    let pair = pairs && pairs
        .filter((p) => {
            return (p.pair1 === pMember.memberId && p.pair2 === cMember.memberId)
                || (p.pair2 === pMember.memberId && p.pair1 === cMember.memberId)
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
