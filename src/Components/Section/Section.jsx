import React from "react";
import styled from "styled-components";
import "./Section.css";
import pga from "../../pga.png";

const SectinContainer = styled.div`
  width: 100%;
  height: 378px;
  position: relative;
  background-position: calc(100% - 0px) calc(100% - 80%);
  box-shadow: -2px 4px 9px 6px #ccc;
`;

const SectionFooter = styled.div`
  height: 59px;
  width: 100%;
  position: absolute;
  bottom: 0;
  background-color: #2b2d42;
`;

const SectionLinkContainer = styled.div`
  position: relative;
  float: left;
  padding-left: 20px;
  bottom: 6px;
`;

const SectionLink = styled.h2`
  width: auto;
  color: white;
  font-family: Nunito-Regular;
  padding-righ: 5px;
`;
const RightArrow = styled.i`
  border: solid white;
  border-width: 0 3px 3px 0;
  display: inline-block;
  padding: 5px;
  -webkit-transform: rotate(-45deg);
  -ms-transform: rotate(-45deg);
  transform: rotate(-45deg);
  -webkit-transform: rotate(-45deg);
`;

const SectionFooterImgContainer = styled.div`
  float: right;
  height: 100%;
  width: 59px;
  border-left: 5px solid #426a5a;
`;

const SectionFooterImg = styled.img`
  width: 59px;
  height: 100%;
`;

export const Section = () => {
  return (
    <>
      <SectinContainer className="SC">
        <SectionFooter>
          <SectionLinkContainer>
            <SectionLink>
              Tournaments<RightArrow></RightArrow>
            </SectionLink>
          </SectionLinkContainer>
          <SectionFooterImgContainer>
            <SectionFooterImg src={pga}></SectionFooterImg>
          </SectionFooterImgContainer>
        </SectionFooter>
      </SectinContainer>
    </>
  );
};

export default Section;
