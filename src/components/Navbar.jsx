import Badge from "@mui/material/Badge";
import { Search, ShoppingCartOutlined } from "@mui/icons-material"

import React from "react";
import styled from "styled-components";
import { mobile } from "../responsive";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { logout } from "../features/counter/apiCalls";

const Container = styled.div`
  margin-bottom: 12px;
  height: 60px;
  ${mobile({ height: "50px" })}
`;

const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${mobile({ padding: "10px 0px" })}
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;

const Language = styled.span`
  font-size: 14px;
  cursor: pointer;
  ${mobile({ display: "none" })}
`;

const SearchContainer = styled.div`
  border: 0.5px solid lightgray;
  display: flex;
  align-items: center;
  margin-left: 25px;
  padding: 5px;
`;

const Input = styled.input`
  border: none;
  outline-width: 0;
  ${mobile({ width: "50px" })}
`;

const Center = styled.div`
  flex: 1;
  text-align: center;
`;

const Logo = styled.h2`
  font-weight: bold;
  font-size: 700;
  ${mobile({ fontSize: "24px" })}
`;
const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  ${mobile({ flex: 1, justifyContent: "center" })}
`;

const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 25px;
  ${mobile({ fontSize: "12px", marginLeft: "10px" })}
`;



const Navbar = () => {
  const user = useSelector((state) => state.user.currentUser);
  const quantity = useSelector(state=>state.cart.quantity)
  const dispatch = useDispatch()

  const handleLogout = () => {
    logout(dispatch)
  }

  return (
    <Container>
      <Wrapper>
        <Left>
          <Language>EN</Language>
          <SearchContainer>
            <Input placeholder="Search" />
            <Search style={{ color: "gray", fontSize: 16 }} />
          </SearchContainer>
        </Left>
        <Center>
          <Logo>NNADIDAN.</Logo>
        </Center>
        <Right>
          {/* <> */}
          { user ?
            <MenuItem onClick={handleLogout}> LOGOUT</MenuItem>
            :
            <>
              <MenuItem><Link to="/register" style={{textDecoration:"none"}}>REGISTER</Link></MenuItem>
              <MenuItem><Link to="/login" style={{textDecoration:"none"}}>SIGN IN </Link></MenuItem>
            </>

          }
          {/* </> */}
          <Link to="/cart" style={{textDecoration:"none"}}>
          <MenuItem>
            <Badge badgeContent={quantity} color="primary">
              <ShoppingCartOutlined />
            </Badge>
          </MenuItem>
          </Link>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
