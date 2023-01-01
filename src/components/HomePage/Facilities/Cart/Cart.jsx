import React from "react";

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    border-radius: 3px;
    box-shadow: 0px 5px 10px 0px #dddddd;
`;

const Title = styled.h3``;

const Desc = styled.div``;

const Cart = ({ facility }) => {
    return (
        <Container>
            <Title>{facility.title}</Title>
            <Desc>{facility.desc}</Desc>
        </Container>
    );
};

export default Cart;
