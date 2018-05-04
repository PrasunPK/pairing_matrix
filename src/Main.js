import React from 'react';
import Grid from 'material-ui/Grid';

import './App.css';
import {members} from "./data";
import Row from "./Row";

const Main = () => {
    return (
        <Grid container className="main-content">
            {
                members.map((value, i) => (
                    <Row name={value.name} index={i}/>
                ))
            }
        </Grid>
    );
};

export default Main;
