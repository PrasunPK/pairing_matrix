import React from "react";
import {Paper, Table, TableBody, TableCell, TableHead, TableRow} from "@material-ui/core/es/index";

const TeamMembers = ({members}) => {
    return (
        <Paper className="">
            <Table className="">
                <TableHead>
                    <TableRow>
                        <TableCell>NAME</TableCell>
                        <TableCell>ID</TableCell>
                        <TableCell>EMAIL</TableCell>
                        {/*<TableCell component="th">ACTIVE</TableCell>*/}
                    </TableRow>
                </TableHead>
                <TableBody>
                    {members && members.map((member, index) => {
                        return (
                            <TableRow key={index}>
                                <TableCell scope="row">
                                    {member.memberName}
                                </TableCell>
                                <TableCell>{member.memberId}</TableCell>
                                <TableCell>{member.memberEmail}</TableCell>
                                {/*<TableCell>{'Yes'}</TableCell>*/}
                            </TableRow>
                        );
                    })}
                </TableBody>
            </Table>
        </Paper>
    )
};

export default TeamMembers;