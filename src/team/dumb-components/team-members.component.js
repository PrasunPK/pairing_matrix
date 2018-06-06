import Paper from "material-ui/es/Paper/Paper";
import Table from "material-ui/es/Table/Table";
import TableHead from "material-ui/es/Table/TableHead";
import TableRow from "material-ui/es/Table/TableRow";
import React from "react";
import TableCell from "material-ui/es/Table/TableCell";
import TableBody from "material-ui/es/Table/TableBody";

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
                                <TableCell>{index}</TableCell>
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