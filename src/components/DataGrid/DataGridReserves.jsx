import * as React from "react";
import Box from "@mui/material/Box";
import { DataGrid, GridColDef, GridValueGetterParams } from "@mui/x-data-grid";
import styled from "styled-components";
import { Button } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { contactsListAction } from "../../actions/admin/contactsListAction";
import { reservesListAction } from "../../actions/admin/reservesListAction";


const Center = styled.div`
  margin: 10rem;
`;

export default function DataGridDemo() {
  const dispatch = useDispatch();

  const { loading, error, reserves } = useSelector(
    (state) => state.reservesList
  );
  React.useEffect(() => {
    if (error) {
      toast.error(error);
    }
    dispatch(reservesListAction());
  }, [dispatch, error]);
  const columns = [
    { field: "id", headerName: "شماره ", width: 90 },
    { field: "room_id", headerName: "شماره اتاق", width: 90 },
  
    {
      field: "price",
      headerName: "قیمت",
      width: 150,
    },
    {
      field: "adults",
      headerName: "تعداد",
      width: 150,
    },
    {
      field: "from_date",
      headerName: "ورود",
      width: 200,
    },
  
    {
      field: "to_date",
      headerName: "خروج",
      width: 200,
    },
  ];
  
  return (
    <Center>
      {" "}
      <Box dir="rtl" sx={{ height: 400, width: "80%" }}>
        {reserves && (
          <DataGrid
            rows={reserves}
            columns={columns}
            pageSize={5}
            rowsPerPageOptions={[5]}
            disableSelectionOnClick
            experimentalFeatures={{ newEditingApi: true }}
          />
        )}
      </Box>
    </Center>
  );
}
