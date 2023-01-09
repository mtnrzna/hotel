import * as React from "react";
import Box from "@mui/material/Box";
import { DataGrid, GridColDef, GridValueGetterParams  } from "@mui/x-data-grid";
import styled from "styled-components";
import { Button } from "@mui/material";
const columns = [
  {
    field: "name",
    headerName: "نام ",
    width: 150,
  },
  {
    field: "email",
    headerName: "ایمیل",
    width: 200,
  },
  {
    field: "massage",
    headerName: "پیام",
    width: 400,
  },
  

  {
    field: "delete",
    headerName: "حذف",
    width: 100,
    renderCell: (cellValues) => {
      return (
        <Button
          variant="contained"
          color="error"
          onClick={(event) => {
            console.log(event, cellValues);
          }}
        >
          حذف
        </Button>
      );
    }
  },
];

const rows = [
  { id: 1,  name: "عباس مجرد", email: "abbas@gmail.com ", massage: "این اتاق با متراژ 36.5 متری نورگیر و دلباز با منظره ..." ,},
  { id: 2, name: "عباس مجرد", email: "abbas@gmail.com ", massage: "این اتاق با متراژ 36.5 متری نورگیر و دلباز با منظره ..." ,},
  { id: 3,name: "عباس مجرد", email: "abbas@gmail.com ", massage: "این اتاق با متراژ 36.5 متری نورگیر و دلباز با منظره ..." ,},
  { id: 4, name: "عباس مجرد", email: "abbas@gmail.com ", massage: "این اتاق با متراژ 36.5 متری نورگیر و دلباز با منظره ..." ,},
  { id: 5, name: "عباس مجرد", email: "abbas@gmail.com ", massage: "این اتاق با متراژ 36.5 متری نورگیر و دلباز با منظره ..." ,},
  { id: 6, name: "عباس مجرد", email: "abbas@gmail.com ", massage: "این اتاق با متراژ 36.5 متری نورگیر و دلباز با منظره ..." ,},
  { id: 7,name: "عباس مجرد", email: "abbas@gmail.com ", massage: "این اتاق با متراژ 36.5 متری نورگیر و دلباز با منظره ..." ,},
  { id: 8, name: "عباس مجرد", email: "abbas@gmail.com ", massage: "این اتاق با متراژ 36.5 متری نورگیر و دلباز با منظره ..." ,},
  { id: 9, name: "عباس مجرد", email: "abbas@gmail.com ", massage: "این اتاق با متراژ 36.5 متری نورگیر و دلباز با منظره ..." ,},
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
