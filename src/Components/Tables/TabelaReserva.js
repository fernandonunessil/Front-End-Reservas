import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";


export default function TabelaReserva(params) {
  const { data } = params;
  return (
    <div>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 800 }} size="small" aria-label="a dense table">
          <TableHead sx={{ backgroundColor: "#131313" }}>
            <TableRow>
              <TableCell align="center" className="text-white p-4">
                Nome do Usuario
              </TableCell>
              <TableCell align="center" className="text-white p-4">
                Data e Hora da Reserva
              </TableCell>
              <TableCell align="center" className="text-white p-4">
                Placa do Carro
              </TableCell>
              <TableCell align="center" className="text-white p-4">
                Id da reserva
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data !== undefined
              ? data.map((row) => (
                  <TableRow
                    key={row.idreserva}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                    className="p-4"
                  >
                    <TableCell
                      className="p-4"
                      component="th"
                      scope="row"
                      sx={{ padding: "10px" }}
                      align="center"
                    >
                      {row.nome}
                    </TableCell>
                    <TableCell
                      align="center"
                      sx={{ padding: "10px" }}
                      className="p-4"
                    >
                      {row.data + ' | ' + row.hora}
                    </TableCell>
                    <TableCell
                      align="center"
                      sx={{ padding: "10px" }}
                      className="p-4"
                    >
                      {row.placa}
                    </TableCell>
                    <TableCell
                      align="center"
                      sx={{ padding: "10px" }}
                      className="p-4"
                    >
                      {row.idreserva}
                    </TableCell>
                  </TableRow>
                ))
              : null}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
