import React from "react";
import styled from "styled-components";
import Input from "../AuthPages/Input/Input";
import { Button } from "@mui/material";

const ContainerDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  flex-direction: column;
  margin-top: 7rem;
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
const Inputs = () => {
  return (
    <ContainerDiv>
      <InputDiv>
        <Input style={{marginRight:"40px"}} placeholder={" نام خانوادگی"} name={"familyName"} />
        <Input placeholder={"نام"} name={"name"} />
      </InputDiv>
      <InputDiv>
        <Input style={{marginRight:"40px"}} placeholder={"موبایل "} name={"phone"} />
        <Input placeholder={"تاریخ تولد"} name={"birthday"} />
      </InputDiv>
      <InputDiv>
        <Input style={{marginRight:"40px"}}  placeholder={" ایمیل "} name={"email"} />
        <Input placeholder={"کدملی"} name={"code"} />
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
          color="warning"
          onClick={(event) => {
          }}
        >
          ویرایش
        </Button>

      </BtnDiv>
    </ContainerDiv>
  );
};

export default Inputs;
