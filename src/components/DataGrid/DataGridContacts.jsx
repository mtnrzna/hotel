import * as React from "react";
import Box from "@mui/material/Box";
import { DataGrid, GridColDef, GridValueGetterParams  } from "@mui/x-data-grid";
import styled from "styled-components";
import { Button } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { contactsListAction } from "../../actions/admin/contactsListAction";

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
  const dispatch = useDispatch();

  const { loading, error, contactsList } = useSelector((state) => state.contactsList);
  React.useEffect(() => {
    if (error) {
      toast.error(error);
    }
    dispatch(contactsListAction());
  }, [dispatch, error]);
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
      field: "description",
      headerName: "پیام",
      width: 400,
    },
    
  
    {
      field: "delete",
      headerName: "عملیات",
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
  
  return (
    <Center>
      {" "}
      <Box     dir="rtl" sx={{ height: 400, width: "80%" }}>
        {contactsList &&(      <DataGrid
    
          rows={contactsList}
          columns={columns}
          pageSize={5}
          rowsPerPageOptions={[5]}
          disableSelectionOnClick
          experimentalFeatures={{ newEditingApi: true }}
        />)}
  
      </Box>

    </Center>
  );
}
