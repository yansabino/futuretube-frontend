import React, { Fragment } from "react";
import { connect } from "react-redux";
import TextField from "@material-ui/core/TextField";
import {
  SignUpWrapper,
  ImgContainer,
  StyledImg,
  StyledButton,
} from "../../style/signupPage";
import futuretube from "../../images/futuretube.png";
import { userSignup } from "../../actions/userActions";

const signupForm = [
  {
    name: "name",
    type: "text",
    label: "Nome",
    required: true,
    pattern: "^[A-Za-z]$",
  },
  {
    name: "email",
    type: "email",
    label: "E-mail",
    required: true,
    pattern:
      "^[A-Za-^([a-zA-Z0-9_-.]+)@([a-zA-Z0-9_-.]+).([a-zA-Z]{2,5})$]{3,}$",
  },
  {
    name: "birthDate",
    type: "text",
    label: "Dia de Nascimento",
    required: true,
    pattern: "^([0-2][0-9]|(3)[0-1])(/)(((0)[0-9])|((1)[0-2]))(/)d{4}$",
  },
  {
    name: "password",
    type: "password",
    label: "Senha",
    required: true,
  },
  {
    name: "picture",
    type: "text",
    label: "Foto",
    required: true,
  },
];

class SignUp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      form: {}
    };
  }

  handleFieldChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleSignupButton = (event) => {
    event.preventDefault();
    const { name, email, birthDate, password, picture } = this.state;
    this.props.signup(name, email, birthDate, password, picture);

    this.setState({ form: {} });
  };

  render() {
    return (
      <Fragment>
        <SignUpWrapper onSubmit={this.handleSignupButton}>
          <ImgContainer>
            <StyledImg src={futuretube} alt="Logo" />
            <h4>Cadastrar</h4>
          </ImgContainer>
          {signupForm.map((input) => (
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

          <StyledButton type="submit">Sign up</StyledButton>
        </SignUpWrapper>
      </Fragment>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  signup: (name, email, birthDate, password, picture) =>
    dispatch(userSignup(name, email, birthDate, password, picture)),
});

export default connect(null, mapDispatchToProps)(SignUp);
