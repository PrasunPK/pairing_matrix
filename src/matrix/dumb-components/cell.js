import React from "react";
import {Grid, IconButton, Paper} from "@material-ui/core/es/index";
import Avatar from "@material-ui/core/es/Avatar/Avatar";

const Cell = ({rowMember, member, handleAddClick, handleMinusClick, count, normDays, pIndex, cIndex}) => {
    return (
        <Grid key={`${cIndex}${pIndex}Cell`} item>
            {
                cIndex <= pIndex ?
                    <Paper style={{
                        paddingTop: 20,
                        paddingBottom: 9,
                        height: 33, width: 80
                    }}>
                        <React.Fragment>
                            <div className="pair-value" id={`${rowMember.memberId}_${member.memberId}_value`}>
                                {count > 0 ? count : 0}
                                <Avatar className={`pair-marker alert${normDays}`}
                                        id={`${rowMember.memberId}_${member.memberId}_avatar`}>
                                </Avatar>
                            </div>
                            <div className="fab-action-icons">
                                <IconButton className="fab-action-button add-button"
                                            id={`${rowMember.memberId}_${member.memberId}_add`}
                                            onClick={handleAddClick}>
                                    +
                                </IconButton>
                                <IconButton className="fab-action-button minus-button"
                                            id={`${rowMember.memberId}_${member.memberId}_minus`}
                                            onClick={handleMinusClick} disabled={count <= 0}>
                                    -
                                </IconButton>
                            </div>
                        </React.Fragment>
                    </Paper> :
                    <Paper style={{
                        paddingTop: 20,
                        paddingBottom: 9,
                        height: 33, width: 80,
                        backgroundColor: "#D7D7D7"
                    }}/>
            }
        </Grid>)
};

export default Cell;