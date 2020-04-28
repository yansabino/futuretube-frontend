import styled from "styled-components";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

export const VideoDetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 150px auto;
  justify-content: space-between;
`;

export const StyledIFrame = styled.iframe`
  border: 1px solid black
`;

export const ButtonWrapper = styled.div`
    max-width: 100px;
    margin: 0 auto;
`

export const StyledButton = withStyles({
  root: {
    background: "#FF0000",
    color: "#fff",
    margin: "0 20px 10px 5px",

    "&:hover": {
      border: "1px solid #FF0000",
      background: "#fff",
      color: "#ff0000",
    },
  },
})(Button);
