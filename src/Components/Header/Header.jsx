import React from "react";
import styled from "styled-components";
import { NAV_COLOR, FONT_FAMILY } from "../../constants";
import { useHistory } from "react-router-dom";

const NameTag = styled.div`
  width: 300px;
  height: 80px;
  text-align: left;
  cursor: pointer;
  font-family: Nunito;
`;
const Name = styled.p`
  color: white;
  font-size: 40px;
  margin: 10px;
  position: fixed;
`;
const NavElements = styled.nav`
  margin-left: 8px;
`;
const NavElement = styled.div`
  width: 30px;
  height: 55px;
  background-color: #fff;
  background-color: rgba(255, 255, 255, 0.5);
  margin-bottom: 10px;
  transition: width 0.4s;
  cursor: pointer;

  -webkit-transition: width 0.4s;
  :hover {
    width: ${(props) => props.width};
  }
`;

const NavLinkContainer = styled.div`
  height: 100%;
  width: 100%;
  opacity: 0;
  transition: opacity 0.3s;
  -webkit-transition: opacity 0.3s;
  :hover {
    opacity: 1;
  }
`;

const NavLink = styled.a`
  text-decoration: none;
  font-size: 30px;
  font-family: Nunito-Regular;
  color: black;
  padding-left: 10px;
  :visited {
    color: black;
  } /* Visited link    */
  :hover {
    color: black;
  } /* Mouse over link */
  :active {
    color: black;
  }
`;

//array [0,1,2,3]
// navElements is an array of objects. arr = [0,1,2...] object = {key:value} so...  we can loop through an array
// navElements get the array and map

const navElements = [
  { url: "/about", name: "About", width: "150px" },
  { url: "/partners", name: "Partners", width: "175px" },
  { url: "/goals", name: "Goals", width: "200px" },
];

export const Header = () => {
  return (
    <>
      <NameTag
        onClick={() => {
          window.location.href = "/home";
        }}
      >
        <Name>SHANE SMITH</Name>
      </NameTag>
      <NavElements>
        {navElements.map((el) => {
          return (
            <NavElement
              onClick={() => {
                window.location.href = el.url;
              }}
              width={el.width}
            >
              <NavLinkContainer>
                <NavLink href={el.url}>{el.name}</NavLink>
              </NavLinkContainer>
            </NavElement>
          );
        })}
      </NavElements>
    </>
  );
};

export default Header;
