import React from "react";
import styled from "styled-components";
import Input from "../AuthPages/Input/Input";
import { Button, TextField } from "@mui/material";

const ContainerDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  flex-direction: column;
  margin-top: 7rem;
  margin-left:7rem;
  max-width: 85%;
`;
const InputDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin:1rem;
  padding:1rem;
  width: 50%;
`;
const BtnDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 50%;

`;
const CreateRoomInputs = () => {
  return (
    <ContainerDiv>
      <InputDiv>
        <Input style={{marginRight:"40px",marginBottom:"0"}} type={"number"} placeholder={"قیمت"} name={"price"} />
        <Input style={{marginBottom:"0"}}   placeholder={" نام اتاق"} name={"roomname"} />
      </InputDiv>
      <InputDiv>
        <Input type={"file"} style={{marginRight:"40px",marginBottom:"0"}} placeholder={" تصویر"} name={"image"} />
        <Input type={"number"} style={{marginBottom:"0"}} placeholder={"تعداد"} name={"people"} />
        
      </InputDiv>
      <InputDiv>
        <Input textarea={true} type={"textarea"} placeholder={"توضیحات"} name={"caption"} />
        
      </InputDiv>
      <BtnDiv>
      <Button
          variant="contained"
          color="error"
          onClick={(event) => {
          }}
        >
          بازگشت
        </Button>
        <Button
          variant="contained"
          color="primary"
          onClick={(event) => {
          }}
        >
          تایید
        </Button>
        {/* <Button
          variant="contained"
          color="warning"
          onClick={(event) => {
          }}
        >
          ویرایش
        </Button> */}
      </BtnDiv>
    </ContainerDiv>
  );
};

export default CreateRoomInputs;
