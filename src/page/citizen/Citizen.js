import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

function createData(आर्थिकवर्ष, संस्थाको, प्याननम्बर, फोननम्बर, क्षेत्र, संगठनप्रकार, अन्य) {
  return { आर्थिकवर्ष, संस्थाको, प्याननम्बर, फोननम्बर, क्षेत्र, संगठनप्रकार, अन्य };
}

const rows = [
  createData(2079, 'govt name' ,15934, 98726733, 'service', 'अन्य'),
  createData(2080, 'govt name' ,23733, 637389, 'service', 'अन्य'),

];


export default function BasicTable() {
  
  
  return (
    
    
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 750 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>आर्थिक वर्ष</TableCell>
            <TableCell align="right">संस्थाको</TableCell>
            <TableCell align="right">प्यान नम्बर</TableCell>
            <TableCell align="right">फोन नम्बर</TableCell>
            <TableCell align="right">क्षेत्र</TableCell>
            <TableCell align="right">संगठन प्रकार</TableCell>
            <TableCell align="right">कार्य</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.आर्थिकवर्ष}
              </TableCell>
              <TableCell align="right">{row.संस्थाको}</TableCell>
              <TableCell align="right">{row.प्याननम्बर}</TableCell>
              <TableCell align="right">{row.फोननम्बर}</TableCell>
              <TableCell align="right">{row.क्षेत्र}</TableCell>
              <TableCell align="right">{row.संगठनप्रकार}</TableCell>
              <TableCell align="right">{row.अन्य}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}