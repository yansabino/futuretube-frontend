import React from "react";

import {
  StyledHeader,
  StyledImg,
  LogoContainer,
  MenuContainer,
  StyledButton,
} from "../style/header";
import futuretube from "../images/futuretube.png";

function HeaderVideoDetails(props) {
  return (
    <StyledHeader>
      <LogoContainer>
        <StyledImg src={futuretube} alt="logo" />
      </LogoContainer>

      <MenuContainer>
        {props.goToLogin && (
          <StyledButton onClick={props.goToLogin}>login</StyledButton>
        )}
        {props.goToSignUp && (
          <StyledButton onClick={props.goToSignUp}>SignUp</StyledButton>
        )}
        {props.logout && (
          <StyledButton onClick={props.logout}>Logout</StyledButton>
        )}
      </MenuContainer>
    </StyledHeader>
  );
}

export default HeaderVideoDetails;
