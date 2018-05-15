import React from "react";
import {Button, FormControl, Grid, InputLabel, MenuItem, Paper, Select, Typography} from "material-ui";
import {Save} from "@material-ui/icons/es/index";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
    PaperProps: {
        style: {
            maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
            width: 250
        }
    }
};

class MultipleSelect extends React.Component {
    render() {
        const {teams, selectedTeam, handleChange} = this.props;

        return (
            <Grid className="existingTeams">
                <Paper className="selectTeamFromExisting">
                    <Typography variant="subheading" component="label" className="promptHeading">
                        Already have team?
                    </Typography>
                    <FormControl>
                        <InputLabel htmlFor="select-multiple">Team</InputLabel>
                        <Select
                            className="selectBoxForTeams"
                            value={selectedTeam}
                            onChange={handleChange}
                            MenuProps={MenuProps}
                        >
                            {teams && teams.map(team => (
                                <MenuItem
                                    key={team.teamEmail}
                                    value={team.teamEmail}
                                >
                                    {team.teamName}
                                </MenuItem>
                            ))}
                        </Select>
                    </FormControl>
                    <Button className="saveInfoButton" color="primary" variant="raised" size="medium"
                            id="save-team-detail-button" onClick={() => {
                    }}>
                        <Save/>
                        Save
                    </Button>
                </Paper>
            </Grid>
        );
    }
}

export default MultipleSelect;
