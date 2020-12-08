import React from "react";
import styled from "styled-components";
import { NAV_COLOR, FONT_FAMILY } from "../../constants";

const NameTag = styled.div`
  background: #000;
  width: 300px;
  height: 80px;
  text-align: center;
  font-family: ${FONT_FAMILY};
  cursor: pointer;
`;
const Name = styled.p`
  color: white;
  font-size: 40px;
  margin: 10px;
`;
const NavElements = styled.nav``;
const NavElement = styled.div`
  width: 200px;
  height: 70px;
  background-color: grey;
  margin-bottom: 10px;

  :hover {
    width: ${(props) => props.width};
  }
`;

const Link = styled.a`
  margin-right: 10px;
`;

//array [0,1,2,3]
// navElements is an array of objects. arr = [0,1,2...] object = {key:value} so...  we can loop through an array
// navElements get the array and map

const navElements = [
  { url: "/about", name: "About", width: "230px" },
  { url: "/sponsors", name: "Sponsors", width: "250px" },
];

export const Header = () => {
  return (
    <>
      <NameTag
        onClick={() => {
          window.location.href = "/home";
        }}
      >
        <Name>Shane Smith</Name>
      </NameTag>
      {navElements.map((el) => {
        console.log(el);
        return <NavElement width={el.width}></NavElement>;
      })}
    </>
  );
};

export default Header;
