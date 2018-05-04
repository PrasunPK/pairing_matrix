import React from 'react';
import Grid from 'material-ui/Grid';

import './App.css';
import members from "./data/members";
import Row from "./Row";

const Main = () => {
    return (
        <Grid container className="main-content">
            {
                members.map((member) => (
                    <Row rowMember={member} />
                ))
            }
        </Grid>
    );
};

export default Main;
