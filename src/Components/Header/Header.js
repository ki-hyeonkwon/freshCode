import React from "react";
import styled from "styled-components";

const Header = () => {
  return (
    <HeaderWrapper>
      <PageLogo src="https://www.freshcode.me/images/header-img/main-tap-logo@2x.png"></PageLogo>
    </HeaderWrapper>
  );
};
export default Header;

const HeaderWrapper = styled.div`
  width: 100vw;
  margin: 10px;
  display: flex;
  align-items: center;
`;

const PageLogo = styled.img`
  width: 162px;
  height: 51px;
`;
