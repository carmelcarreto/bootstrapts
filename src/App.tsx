import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Button, ButtonGroup, Container } from '@mui/material';

import { styled } from '@mui/material/styles';

const Div = styled('div')(({ theme }) => ({
  ...theme.typography.button,
  backgroundColor: theme.palette.background.paper,
  padding: theme.spacing(2),
}));


export default function App() {
  
  return (
    <>
      <Container maxWidth="sm">

      <Div>{"STORE"}</Div>
      <Button variant="text">Add Product</Button>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 500 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="right">Id</TableCell>
              <TableCell align="right">Name</TableCell>
              <TableCell align="right">Price</TableCell>
              <TableCell align="center"> Options</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
              <TableRow>
                <TableCell align="right">1</TableCell>
                <TableCell align="right">Teclado</TableCell>
                <TableCell align="right">200</TableCell>
                <TableCell align="center">
                  <ButtonGroup variant="contained" aria-label="outlined primary button group">
                    <Button>Edit</Button>
                    <Button>Delete</Button>
                  </ButtonGroup>
                </TableCell>
              </TableRow>-
              <TableRow>
                <TableCell align="right">2</TableCell>
                <TableCell align="right">Mouse</TableCell>
                <TableCell align="right">350</TableCell>
                <TableCell align="center">
                  <ButtonGroup variant="contained" aria-label="outlined primary button group">
                    <Button>Edit</Button>
                    <Button>Delete</Button>
                  </ButtonGroup>
                </TableCell>
              </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
      </Container>
    </>
  );
}
