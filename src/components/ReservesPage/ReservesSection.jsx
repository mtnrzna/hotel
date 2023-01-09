import React, { useEffect } from "react";
import styled from "styled-components";
import Container from "../Container";
import Wrapper from "../Wrapper";
import ReserveList from "./ReserveList/ResereveList";
import { mobile } from "../../responsive";

const Top = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    box-sizing: border-box;
    ${mobile({
        padding: "0 30px",
    })}
`;

const Filter = styled.div``;

const Select = styled.select`
    padding: 5px 5px 5px 100px;
    text-align: right;
    font-family: inherit;
`;

const Option = styled.option``;

const Title = styled.h3``;

const Bottom = styled.div``;

const ReservesSection = () => {
    return (
        <Container>
            <Wrapper>
                <Top>
                    <Filter>
                        <Select name="filer">
                            <Option disabled selected>
                                مقدار پیش فرض
                            </Option>
                            <Option>فیلتر1</Option>
                            <Option>فیلتر2</Option>
                            <Option>فیلتر3</Option>
                            <Option>فیلتر4</Option>
                            <Option>فیلتر1</Option>
                        </Select>
                    </Filter>
                    <Title>اتاق‌ها</Title>
                </Top>
                <Bottom>
                    <ReserveList />
                </Bottom>
            </Wrapper>
        </Container>
    );
};

export default ReservesSection;
