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
    field: "img",
    headerName: "تصویر",
    width: 150,
    renderCell: (params) => <img style={{width:"90px",height:"50px"}} src={params.value} />
  },
  {
    field: "available",
    headerName: "وضعیت",
    description: "This column has a value getter and is not sortable.",
    width: 150,
    renderCell: (cellValues) => {
      return (
        <Button
          variant="contained"
          color={cellValues.value?"primary":"error"}
          onClick={(event) => {
            console.log(event.target)
          }}
        >
          فعال
        </Button>
      );
    }
  },
  {
    field: "edit",
    headerName: "تغییرات",
    width: 150,
    renderCell: (cellValues) => {
      return (
        <Button
          variant="contained"
          color="warning"
          onClick={(event) => {
            console.log(event, cellValues);
          }}
        >
          ویرایش
        </Button>
      );
    }
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
  { id: 1, price: "1000000", roomName: "دبل سوویت", img: "/images/gallery/pic1.png" ,available: true,},
  { id: 2, price: "1000000", roomName: "دبل سوویت", img: "/images/gallery/pic1.png" ,available: true,},
  { id: 3, price: "1000000", roomName: "دبل سوویت", img: "/images/gallery/pic1.png" ,available: true,},
  { id: 4, price: "1000000", roomName: "دبل سوویت", img: "/images/gallery/pic1.png" ,available: true,},
  { id: 5, price: "1000000", roomName: "دبل سوویت", img: "/images/gallery/pic1.png" ,available: true,},
  { id: 6, price: "1000000", roomName: "دبل سوویت", img: "/images/gallery/pic1.png" ,available: true,},
  { id: 7, price: "1000000", roomName: "دبل سوویت", img: "/images/gallery/pic1.png" ,available: true,},
  { id: 8, price: "1000000", roomName: "دبل سوویت", img: "/images/gallery/pic1.png" ,available: true,},
  { id: 9, price: "1000000", roomName: "دبل سوویت", img: "/images/gallery/pic1.png" ,available: true,},
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
