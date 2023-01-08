import * as React from "react";
import Box from "@mui/material/Box";
import { DataGrid, GridColDef, GridValueGetterParams  } from "@mui/x-data-grid";
import styled from "styled-components";
import { Button } from "@mui/material";
const columns = [
  { field: "id", headerName: "شماره ", width: 90 },
  {
    field: "name",
    headerName: "نام ",
    width: 150,
  },
  {
    field: "email",
    headerName: "ایمیل",
    width: 150,
  },
  {
    field: "code",
    headerName: "کدملی",
    width: 150,
  },
  {
    field: "phone",
    headerName: "موبایل",
    width: 150,
  },

  {
    field: "birthday",
    headerName: "تاریخ تولد",
    width: 150,
  },

];

const rows = [
  { id: 1, name: "عباس مجرد", email: " abbas@gmail.com", code: "21401827492" ,phone: "09123456789",birthday: "1400/2/6"},
  { id: 2, name: "عباس مجرد", email: " abbas@gmail.com", code: "21401827492" ,phone: "09123456789",birthday: "1400/2/6"},
  { id: 3, name: "عباس مجرد", email: "abbas@gmail.com ", code: "21401827492" ,phone: "09123456789",birthday: "1400/2/6"},
  { id: 4, name: "عباس مجرد", email: "abbas@gmail.com ", code: "21401827492" ,phone: "09123456789",birthday: "1400/2/6"},
  { id: 5, name: "عباس مجرد", email: "abbas@gmail.com ", code: "21401827492" ,phone: "09123456789",birthday: "1400/2/6"},
  { id: 6, name: "عباس مجرد", email: "abbas@gmail.com ", code: "21401827492" ,phone: "09123456789",birthday: "1400/2/6"},
  { id: 7, name: "عباس مجرد", email: "abbas@gmail.com ", code: "21401827492" ,phone: "09123456789",birthday: "1400/2/6"},
  { id: 8, name: "عباس مجرد", email: "abbas@gmail.com ", code: "21401827492" ,phone: "09123456789",birthday: "1400/2/6"},
  { id: 9, name: "عباس مجرد", email: "abbas@gmail.com ", code: "21401827492" ,phone: "09123456789",birthday: "1400/2/6"},
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
