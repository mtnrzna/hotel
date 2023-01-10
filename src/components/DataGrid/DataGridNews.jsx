import * as React from "react";
import Box from "@mui/material/Box";
import { DataGrid, GridColDef, GridValueGetterParams } from "@mui/x-data-grid";
import styled from "styled-components";
import { Button } from "@mui/material";
import LinkWrapper from ".././LinkWrapper";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { newsListAction } from "../../actions/admin/newsListAction";

const rows = [
    { id: 1, newsName: "دبل سوویت", img: "/images/gallery/pic1.png" },
    { id: 2, newsName: "دبل سوویت", img: "/images/gallery/pic1.png" },
    { id: 3, newsName: "دبل سوویت", img: "/images/gallery/pic1.png" },
    { id: 4, newsName: "دبل سوویت", img: "/images/gallery/pic1.png" },
    { id: 5, newsName: "دبل سوویت", img: "/images/gallery/pic1.png" },
    { id: 6, newsName: "دبل سوویت", img: "/images/gallery/pic1.png" },
    { id: 7, newsName: "دبل سوویت", img: "/images/gallery/pic1.png" },
    { id: 8, newsName: "دبل سوویت", img: "/images/gallery/pic1.png" },
    { id: 9, newsName: "دبل سوویت", img: "/images/gallery/pic1.png" },
];
const Center = styled.div`
    margin: 10rem auto;
    max-width: 1440px;
`;
const BtnDiv = styled.div`
    display: flex;
    flex-direction: row-reverse;
    margin-right: 17rem;
    margin-top: 1rem;
`;
const MenuItem = styled.button`
    margin: 10px;
    font-size: 16px;
    background-color: rgb(47, 128, 237);
    color: white;
    padding: 10px;
`;
export default function DataGridDemo() {
    const dispatch = useDispatch();

    const { loading, error, news } = useSelector((state) => state.newsList);
    React.useEffect(() => {
        if (error) {
            toast.error(error);
        }
        dispatch(newsListAction());
    }, [dispatch, error]);
    const columns = [
        { field: "id", headerName: "شماره خبر", width: 90 },
        {
            field: "title",
            headerName: "عنوان",
            width: 150,
        },

        {
            field: "image",
            headerName: "تصویر",
            width: 150,
            renderCell: (params) => (
                <img
                    style={{ width: "90px", height: "50px" }}
                    src={news.image?.replace("/uploads/posts/", "")}
                />
            ),
        },

        {
            headerName: " عملیات ",
            width: 300,
            renderCell: (cellValues) => {
                return (
                    <>
                        <Button
                            variant="contained"
                            color="warning"
                            onClick={(event) => {
                                console.log(cellValues.row);
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
                            sx={{ marginRight: "14px" }}
                        >
                            حذف
                        </Button>
                    </>
                );
            },
        },
    ];
    return (
        <Center>
            {" "}
            <Box dir="rtl" sx={{ height: 400, width: "80%" }}>
                {news && (
                    <DataGrid
                        rows={news}
                        columns={columns}
                        pageSize={5}
                        rowsPerPageOptions={[5]}
                        disableSelectionOnClick
                        experimentalFeatures={{ newEditingApi: true }}
                    />
                )}
            </Box>
            <BtnDiv>
                <LinkWrapper to="/adminpanelcreatenews">
                    <MenuItem>اضافه کردن خبر </MenuItem>
                </LinkWrapper>
            </BtnDiv>
        </Center>
    );
}
