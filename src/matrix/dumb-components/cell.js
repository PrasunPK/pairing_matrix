import React from "react";
import {Grid, IconButton, Paper} from "@material-ui/core/es/index";

const Cell = ({rowMember, member, handleAddClick, handleMinusClick, count, pIndex, cIndex}) => {
    return (<Grid item>
            <Paper style={{paddingTop: 20, paddingBottom: 9, height: 33, width: 80}}>
                {cIndex <= pIndex ?
                    <div>
                        <div className="pair-value" id={`${rowMember.memberId}_${member.memberId}_value`}>
                            {count > 0 ? count : 0}
                        </div>
                        <div className="fab-action-icons">
                            <IconButton className="fab-action-button add-button"
                                        id={`${rowMember.memberId}_${member.memberId}_add`}
                                        onClick={handleAddClick}>
                                +
                            </IconButton>
                            <IconButton className="fab-action-button minus-button"
                                        id={`${rowMember.memberId}_${member.memberId}_minus`}
                                        onClick={handleMinusClick}>
                                -
                            </IconButton>
                        </div>
                    </div> :
                    null
                }
            </Paper>
        </Grid>
    )
};

export default Cell;