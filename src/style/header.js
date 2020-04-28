import styled from "styled-components";
import { withStyles } from '@material-ui/core/styles';
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";



export const StyledHeader = styled.header `
    width: calc(100% - 240px);
    min-height: 10%;
    background-color: white;
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin-left: 240px;
    position: fixed;
    top: 0px;
    z-index: 1;
`

export const StyledImg = styled.img `
    width: 150px;
    height: 100px;
    margin-left: 20px;
`

export const LogoContainer = styled.div `
    width: 20%;
    height: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
`

export const SearchContainer = styled.div`
    display: flex;
    width: 30%;
    height: 100%;
`

export const MenuContainer = styled.div `
    width: 300px;
    height: 100%;
    display: flex;
    justify-content: flex-end;
    align-items: center;
`

export const StyledButton = withStyles({
    root: {
        background: '#FF0000',
        color: '#fff',
        margin: '0 20px 10px 5px',
        
        '&:hover':{
            border: "1px solid #FF0000",
            background: '#fff',
            color: "#ff0000"
        }
    }
})(Button)

export const StyledSearchTextField = styled(TextField)`
    width: 220px;
    padding: '0 14px';
`