import React from "react";
import styled from "styled-components";

const HeaderContainer = styled.header``;

const ContainerGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  column-gap: 30px;
  grid-template-rows: auto;
  justify-content: center;
  grid-auto-flow: column;
  border-bottom: 5px solid #426a5a;
  position: relative;
  z-index: 1;
`;

const HeaderLogo = styled.div`
  grid-column: 1/2;
  z-index: 1;
  color: white;
  border-right: 5px solid #426a5a;
  font-size: 46px;
  padding-right: 8px;
`;

const Nav = styled.nav`
  grid-column: 7/13;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  column-gap: 30px;
  grid-template-rows: auto;
  justify-content: center;
  grid-auto-flow: column;
  font-size: 30px;
  padding-top: 10px;
`;

const NavLinkContainer = styled.div`
  grid-row-start: 1;
  grid-column: ${(props) => props.column};
  color: white;

  text-align: center;
`;

const NavLink = styled.a`
  text-decoration: none;
  font-family: Nunito;
  padding-left: 10px;
  cursor: pointer;
`;

const Circle = styled.div`
  width: 15px;
  height: 15px;
  border-radius: 50%;
  background-color: #426a5a;
  grid-row-start: 1;
  grid-column: ${(props) => props.column};
  margin: 0 auto;
  display: inline-block;
  margin-top: 12px;
`;

//array [0,1,2,3]
// navElements is an array of objects. arr = [0,1,2...] object = {key:value} so...  we can loop through an array
// navElements get the array and map

const navElements = [
  { url: "/about", name: "About", column: "2/2" },
  { url: "/partners", name: "Partners", column: "3/3" },
  { url: "/goals", name: "Goals", column: "4/4" },
];

export const Header = () => {
  return (
    <>
      <HeaderContainer>
        <ContainerGrid>
          <HeaderLogo>
            <NavLink id="logo" href={"/home"}>
              SS.
            </NavLink>
          </HeaderLogo>
          <Nav>
            <Circle column={"1/1"}></Circle>
            {navElements.map((el, i) => {
              return (
                <NavLinkContainer key={i} column={el.column}>
                  <NavLink href={el.url}>{el.name}</NavLink>
                </NavLinkContainer>
              );
            })}
            <Circle column={"5/5"}></Circle>
          </Nav>
        </ContainerGrid>
      </HeaderContainer>
    </>
  );
};

export default Header;
