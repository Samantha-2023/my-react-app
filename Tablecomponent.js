import React from "react";
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
import FormComponent from "./Formcomponent";


const TableComponent = ({ dataStorage }) => {
  return (
    <TableContainer>
      <Table>
        <TableHead>
        <TableRow>
            <TableCell align="center">SerialNo</TableCell>
            <TableCell align="center">Firstname</TableCell>
            <TableCell align="center">Lastname</TableCell>
            <TableCell align="center">Email</TableCell>
            <TableCell align="center">Password</TableCell>
            <TableCell align="center">CreatedDate</TableCell>
            <TableCell align="center">CreatedTime</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {dataStorage.map((data, index) => (
            <TableRow key={index}>
             <TableCell align="center">{data.serialno}</TableCell>              

              <TableCell align="center">{data.firstname}</TableCell>              
             <TableCell align="center">{data.lastName}</TableCell>
              <TableCell align="center">{data.email}</TableCell>
              <TableCell align="center">{data.password}</TableCell>
              <TableCell align="center">{data.createddate}</TableCell>
              <TableCell align="center">{data.createdtime}</TableCell>




            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default TableComponent;
