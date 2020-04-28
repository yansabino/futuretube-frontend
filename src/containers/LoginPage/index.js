import React, { Fragment } from "react";
import { connect } from "react-redux";
import { push } from "connected-react-router";
import TextField from "@material-ui/core/TextField";
import { routes } from "../Router/";
import { userLogin } from "../../actions/userActions";
import {
  LoginWrapper,
  ImgContainer,
  StyledImg,
  StyledButton,
  ButtonWrapper,
} from "../../style/loginPage";
import futuretube from "../../images/futuretube.png";

const loginForm = [
  {
    name: "email",
    type: "email",
    label: "E-mail",
    required: true,
    pattern:
      "^[A-Za-^([a-zA-Z0-9_-.]+)@([a-zA-Z0-9_-.]+).([a-zA-Z]{2,5})$]{3,}$",
  },
  {
    name: "password",
    type: "password",
    label: "Senha",
    required: true,
  },
];

class LoginPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      form: {},
    };
  }

  handleFieldChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleLoginButton = (e) => {
    e.preventDefault()
    const { email, password } = this.state;
    this.props.login(email, password);

    this.setState({ form: {} });
  };

  render() {
    
    return (
      <Fragment>
        <LoginWrapper onSubmit={this.handleLoginButton}>
          <ImgContainer>
            <StyledImg src={futuretube} alt="Logo" />
            <h4>Entrar</h4>
          </ImgContainer>
          {loginForm.map((input) => (
            <TextField
              variant="outlined"
              margin="normal"
              autoFocus
              fullWidth
              onChange={this.handleFieldChange}
              name={input.name}
              type={input.type}
              label={input.label}
              required={input.required}
              pattern={input.pattern}
            />
          ))}
          <ButtonWrapper>
            <StyledButton type="submit">Login</StyledButton>
            <StyledButton onClick={this.props.goToSignUp}>Sign Up</StyledButton>
          </ButtonWrapper>
        </LoginWrapper>
      </Fragment>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  login: (email, password) => dispatch(userLogin(email, password)),
  goToSignUp: () => dispatch(push(routes.signup)),
});

export default connect(null, mapDispatchToProps)(LoginPage);
