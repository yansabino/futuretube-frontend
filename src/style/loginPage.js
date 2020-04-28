import styled from "styled-components";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

export const LoginWrapper = styled.form`
  width: 100%;
  height: 100vh;
  gap: 10px;
  place-content: center;
  justify-items: center;
  display: grid;
  background-color: #fff;
`;

export const ImgContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 55px;
  justify-content: center;
`;

export const StyledImg = styled.img`
  width: 208px;
  height: 116px;
  object-fit: contain;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  
`;

export const StyledButton = withStyles({
  root: {
    background: "#FF0000",
    color: "#fff",
    margin: "0 5px 10px 5px",

    "&:hover": {
      border: "1px solid #FF0000",
      background: "#fff",
      color: "#ff0000",
    },
  },
})(Button);
