import React from "react";
import styled from "styled-components";
import { NAV_COLOR, FONT_FAMILY } from "../../constants";

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
`;
const NavElements = styled.nav``;
const NavElement = styled.div`
  width: 30px;
  height: 55px;
  background-color: #fff;
  background-color: rgba(255,255,255,0.5);
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
  { url: "/about", name: "About", width: "150px" },
  { url: "/partners", name: "partners", width: "175px" },
  { url: "/goals", name: "goals", width: "200px" },
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
      {navElements.map((el) => {
        console.log(el);
        return <NavElement width={el.width}></NavElement>;
      })}
    </>
  );
};

export default Header;
