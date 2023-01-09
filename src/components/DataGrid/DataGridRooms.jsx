import * as React from "react";
import Box from "@mui/material/Box";
import { DataGrid, GridColDef, GridValueGetterParams } from "@mui/x-data-grid";
import styled from "styled-components";
import { Button } from "@mui/material";
import LinkWrapper from ".././LinkWrapper";


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
    renderCell: (params) => (
      <img style={{ width: "90px", height: "50px" }} src={params.value} />
    ),
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
          color={cellValues.value ? "primary" : "error"}
          onClick={(event) => {
            console.log(cellValues.row); 
          }}
        >
          فعال
        </Button>
      );
    },
  },

  {
    field: "delete",
    headerName: "عملیات",
    width: 300,
    renderCell: (cellValues) => {
      return (

      <>
          <Button
            variant="contained"
            color="warning"
            onClick={(event) => {
              console.log( cellValues.row);
            }}
          >
            ویرایش
          </Button>
          <Button
            variant="contained"
            color="error"
            onClick={(event) => {
              console.log(cellValues.row);
            }}
            sx={{marginRight:"14px"}}
          >
            حذف
          </Button>
        </>
      );
    },
  },
];

const rows = [
  {
    id: 1,
    price: "1000000",
    roomName: "دبل سوویت",
    img: "/images/gallery/pic1.png",
    available: true,
  },
  {
    id: 2,
    price: "1000000",
    roomName: "دبل سوویت",
    img: "/images/gallery/pic1.png",
    available: true,
  },
  {
    id: 3,
    price: "1000000",
    roomName: "دبل سوویت",
    img: "/images/gallery/pic1.png",
    available: true,
  },
  {
    id: 4,
    price: "1000000",
    roomName: "دبل سوویت",
    img: "/images/gallery/pic1.png",
    available: true,
  },
  {
    id: 5,
    price: "1000000",
    roomName: "دبل سوویت",
    img: "/images/gallery/pic1.png",
    available: true,
  },
  {
    id: 6,
    price: "1000000",
    roomName: "دبل سوویت",
    img: "/images/gallery/pic1.png",
    available: true,
  },
  {
    id: 7,
    price: "1000000",
    roomName: "دبل سوویت",
    img: "/images/gallery/pic1.png",
    available: true,
  },
  {
    id: 8,
    price: "1000000",
    roomName: "دبل سوویت",
    img: "/images/gallery/pic1.png",
    available: true,
  },
  {
    id: 9,
    price: "1000000",
    roomName: "دبل سوویت",
    img: "/images/gallery/pic1.png",
    available: true,
  },
];
const Center = styled.div`
  margin: 10rem auto;
 max-width:1440px;
`;
const BtnDiv = styled.div`
  display: flex;
  flex-direction: row-reverse;
  margin-right: 17rem;
  margin-top:1rem;
`;
const MenuItem = styled.button`
  margin: 10px;
  font-size: 16px;
  background-color:rgb(47, 128, 237);
  color: white;
  padding: 10px;
`;
export default function DataGridDemo() {
  return (
    <Center>
      {" "}
      <Box dir="rtl" sx={{ height: 400, width: "80%" }}>
        <DataGrid
          rows={rows}
          columns={columns}
          pageSize={5}
          rowsPerPageOptions={[5]}
          disableSelectionOnClick
          experimentalFeatures={{ newEditingApi: true }}
        />
      </Box>
      <BtnDiv>
        <LinkWrapper to="/adminpanelcreateroom">
          <MenuItem>اضافه کردن اتاق</MenuItem>
        </LinkWrapper>
      </BtnDiv>
    </Center>
  );
}




