import React from "react";
import Paper from "material-ui/es/Paper/Paper";
import Grid from "material-ui/es/Grid/Grid";

const AddMember = ({handleAddMemberClick}) => {

    return (
        <Grid item xs>
            <Paper className="addMember"> Add Member </Paper>
        </Grid>
    );
};
export default AddMember;