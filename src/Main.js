import React from 'react';
import Grid from 'material-ui/Grid';

import './App.css';
import {names} from "./data";
import Row from "./Row";

const Main = () => {
    return (
        <Grid container className="main-content">
            {
                names.map((value, i) => (
                    <Row name={value} index={i}/>
                ))
            }
        </Grid>
    );
};

export default Main;
