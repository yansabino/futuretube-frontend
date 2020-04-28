import React, { Fragment } from "react";
import styled from "styled-components";
import { Loading, Triangle } from "../style/homePage";

const StyledLoader = styled.div`
  margin-top: 150px;
`;

function Loader() {
  return (
    <StyledLoader>
      <Fragment>
        <svg width="150" height="150" viewBox="0 0 40 60">
          <Triangle
            fill="none"
            stroke="#FF0000"
            stroke-width="1"
            points="16,1 32,32 1,32"
          />
          <Loading x="0" y="45" fill="#FF0000">
            Loading...
          </Loading>
        </svg>
      </Fragment>
    </StyledLoader>
  );
}

export default Loader;
