import React from 'react';
import * as _ from 'lodash';
import '../../App.css';
import Row from "./row";
import {Grid} from "@material-ui/core/es/index";

const normalizeDays = (pairs) => {
    if(pairs){
        const days = pairs.map((pair) => parseInt(pair.days, 10));
        const minDays = _.min(days);
        const maxDays = _.max(days);
        const denominator = maxDays - minDays;
        pairs.map((pair) => pair.normDays = Math.round(((pair.days - minDays) / denominator) * 10));
    }
}
const Matrix = ({handleAddClick, handleMinusClick, pairs, members}) => {
    normalizeDays(pairs);
    return (
        <Grid container key={`matrix`} className="main-content">
            {
                members && members.map((member, pIndex) => (
                    <Row key={`${pIndex}MatrixRowWrapper`} pairs={pairs} pIndex={pIndex} members={members}
                         rowMember={member}
                         handleAddClick={handleAddClick}
                         handleMinusClick={handleMinusClick}/>
                ))
            }
        </Grid>
    );
};

export default Matrix;
