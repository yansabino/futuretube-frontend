import styled, { keyframes } from "styled-components";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

export const Container = styled.section`
  width: 100%;
  
  display: flex;
  
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
`;

export const BodyContainer = styled.div`
    width: 100%;
    height: 100vh;
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
`

export const SideMenu = styled.div`
    width: 30%;
    height:100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
`

export const VideoContainer = styled.div`
    width: 1000px;
    height: auto;
    gap: 20px;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    background-color: #FAFAFA;
    margin-top: 150px;
`

// loader animado

export const Loading = styled.text`
  
  font-size: 9px;
  text-align: center;
`;

const dash = keyframes`
    100% { stroke-dashoffset: 136; }
`;

export const Triangle = styled.polygon`
  stroke-dasharray: 17;
  animation: ${dash} 2.5s cubic-bezier(0.35, 0.04, 0.63, 0.95) infinite;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  width: 300px;
  justify-content: center;
  align-items: center;
  margin: 100px auto 0;

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
