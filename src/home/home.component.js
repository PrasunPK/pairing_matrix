import React from "react";
import {Typography} from "@material-ui/core/es/index";

export default () => {
    return (
        <div className="mainContent homeContent">
            <Typography variant="display2" color="inherit">
                Welcome to Pairing Matrix
            </Typography>

            <Typography variant="subheading" color="inherit" className="description">
                Haven't created your team yet! <a href='/team'>Click here</a> to create.
            </Typography>

            <Typography variant="caption" color="inherit" className="description">
                © Copyright 2018 <a target="_blank" href='https://github.com/prasunpk' rel="noopener noreferrer">Prasun</a> <a target="_blank" href='https://github.com/cprasenj' rel="noopener noreferrer">Prasenjit</a>
            </Typography>
        </div>
    )
};