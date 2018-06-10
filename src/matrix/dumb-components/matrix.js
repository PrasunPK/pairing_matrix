import React from 'react';

import '../../App.css';
import Row from "./row";
import {Grid} from "@material-ui/core/es/index";

const Matrix = ({handleAddClick, handleMinusClick, pairs, members}) => {
    return (
        <Grid container className="main-content">
            {
                members && members.map((member, pIndex) => (
                    <Row pairs={pairs} pIndex={pIndex} members={members}
                         rowMember={member}
                         handleAddClick={handleAddClick}
                         handleMinusClick={handleMinusClick}/>
                ))
            }
        </Grid>
    );
};

export default Matrix;