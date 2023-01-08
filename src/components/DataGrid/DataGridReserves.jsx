import * as React from "react";
import Box from "@mui/material/Box";
import { DataGrid, GridColDef, GridValueGetterParams  } from "@mui/x-data-grid";
import styled from "styled-components";
import { Button } from "@mui/material";
const columns = [
  { field: "id", headerName: "شماره اتاق", width: 90 },
  {
    field: "roomName",
    headerName: "نام اتاق",
    width: 150,
  },
  {
    field: "price",
    headerName: "قیمت",
    width: 150,
  },
  {
    field: "counter",
    headerName: "تعداد",
    width: 150,
  },
  {
    field: "in",
    headerName: "ورود",
    width: 150,
  },

  {
    field: "out",
    headerName: "خروج",
    width: 150,
  },

];

const rows = [
  { id: 1, price: "1000000", roomName: "دبل سوویت", counter: "2" ,in: "1400/2/1",out: "1400/2/6"},
  { id: 2, price: "1000000", roomName: "دبل سوویت", counter: "2" ,in: "1400/2/1",out: "1400/2/6"},
  { id: 3, price: "1000000", roomName: "دبل سوویت", counter: "2" ,in: "1400/2/1",out: "1400/2/6"},
  { id: 4, price: "1000000", roomName: "دبل سوویت", counter: "2" ,in: "1400/2/1",out: "1400/2/6"},
  { id: 5, price: "1000000", roomName: "دبل سوویت", counter: "2" ,in: "1400/2/1",out: "1400/2/6"},
  { id: 6, price: "1000000", roomName: "دبل سوویت", counter: "2" ,in: "1400/2/1",out: "1400/2/6"},
  { id: 7, price: "1000000", roomName: "دبل سوویت", counter: "2" ,in: "1400/2/1",out: "1400/2/6"},
  { id: 8, price: "1000000", roomName: "دبل سوویت", counter: "2" ,in: "1400/2/1",out: "1400/2/6"},
  { id: 9, price: "1000000", roomName: "دبل سوویت", counter: "2" ,in: "1400/2/1",out: "1400/2/6"},
];
const Center = styled.div`

  margin: 10rem ;
 
`;

export default function DataGridDemo() {
  return (
    <Center>
      {" "}
      <Box     dir="rtl" sx={{ height: 400, width: "80%" }}>
        <DataGrid
    
          rows={rows}
          columns={columns}
          pageSize={5}
          rowsPerPageOptions={[5]}
          disableSelectionOnClick
          experimentalFeatures={{ newEditingApi: true }}
        />
      </Box>
    </Center>
  );
}
