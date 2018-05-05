import Grid from "material-ui/es/Grid/Grid";
import Paper from "material-ui/es/Paper/Paper";
import React from "react";
import IconButton from "material-ui/es/IconButton/IconButton";

const Cell = ({rowMember, member, handleAddClick, count}) => {
    return (<Grid item>
            <Paper style={{paddingTop: 20, paddingBottom: 9, height: 33, width: 80}}>
                <div className="pair-value" id={`${rowMember.id}_${member.id}_value`}>
                    {count}
                </div>
                <div className="fab-action-icons">
                    <IconButton className="fab-action-button add-button"
                                id={`${rowMember.id}_${member.id}_add`}
                                onClick={handleAddClick}> + </IconButton>
                    <IconButton className="fab-action-button minus-button"
                                id={`${rowMember.id}_${member.id}_minus`}> - </IconButton>
                </div>
            </Paper>
        </Grid>
    )
};

export default Cell;