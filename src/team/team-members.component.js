import Paper from "material-ui/es/Paper/Paper";
import Table from "material-ui/es/Table/Table";
import TableHead from "material-ui/es/Table/TableHead";
import TableRow from "material-ui/es/Table/TableRow";
import React from "react";
import TableCell from "material-ui/es/Table/TableCell";
import TableBody from "material-ui/es/Table/TableBody";
import members from '../data/members';

const TeamMembers = () => {
    return (
        <Paper className="">
            <Table className="">
                <TableHead>
                    <TableRow>
                        <TableCell>NAME</TableCell>
                        <TableCell>ID</TableCell>
                        <TableCell>EMAIL</TableCell>
                        <TableCell>ACTIVE</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {members.map(n => {
                        return (
                            <TableRow key={n.id}>
                                <TableCell component="th" scope="row">
                                    {n.name}
                                </TableCell>
                                <TableCell>{n.id}</TableCell>
                                <TableCell>{n.email}</TableCell>
                                <TableCell>{'Yes'}</TableCell>
                            </TableRow>
                        );
                    })}
                </TableBody>
            </Table>
        </Paper>
    )
};

export default TeamMembers;