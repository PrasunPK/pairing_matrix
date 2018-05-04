import React from 'react';
import Grid from 'material-ui/Grid';
import Paper from "material-ui/Paper";

import './App.css';
import members from "./data/members";
import IconButton from "material-ui/es/IconButton/IconButton";

const Row = ({rowMember}) => {
    return (
        <Grid container direction="row">
            {
                members.map((member) => (
                    <Grid item>
                        <Paper style={{paddingTop: 20, paddingBottom: 9, height: 33, width: 80}}>
                            <div className="pair-value" id={`${member.id}_${rowMember.id}_value`}>
                                {0}
                            </div>
                            <div className="fab-action-icons">
                                <IconButton className="fab-action-button add-button"
                                            id={`${member.id}_${rowMember.id}_add`}> + </IconButton>
                                <IconButton className="fab-action-button minus-button"
                                            id={`${member.id}_${rowMember.id}_minus`}> - </IconButton>
                            </div>
                        </Paper>

                    </Grid>
                ))
            }
        </Grid>
    );
};

export default Row;
