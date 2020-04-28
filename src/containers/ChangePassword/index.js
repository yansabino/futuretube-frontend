import React, { Fragment } from "react";
import { connect } from "react-redux";
import { push } from "connected-react-router";
import { routes } from "../Router/";
import futuretube from "../../images/futuretube.png";
import { changePassword } from "../../actions/userActions";
import {
  PasswordWrapper,
  ImgContainer,
  StyledImg,
  ButtonWrapper,
  StyledButton,
} from "../../style/changePassword";
import TextField from "@material-ui/core/TextField";

const changePassWordForm = [
  {
    name: "oldPassword",
    type: "password",
    label: "Senha Antiga",
    required: true,
  },
  {
    name: "newPassword",
    type: "password",
    label: "Senha Nova",
    required: true,
  },
];

class ChangePassWord extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      form: {},
    };
  }

  componentDidMount() {
    const token = window.localStorage.getItem("token");
    if (!token) {
      window.alert("Usuário precisa estar logado");
      this.props.goToHome();
    }
  }

  handleFieldChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleSubmitPasswordChange = (e) => {
    e.preventDefault();
    const { oldPassword, newPassword } = this.state;
    this.props.changePassword(oldPassword, newPassword);
    this.setState({ form: {} });
  };

  render() {
    return (
      <Fragment>
        <PasswordWrapper onSubmit={this.handleSubmitPasswordChange}>
          <ImgContainer>
            <StyledImg src={futuretube} alt="logo" />
            <h4>Alterar a Senha</h4>
          </ImgContainer>
          {changePassWordForm.map((input) => (
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
            />
          ))}
          <ButtonWrapper>
              <StyledButton type="submit">SubMit</StyledButton>
          </ButtonWrapper>
        </PasswordWrapper>
      </Fragment>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  goToHome: () => dispatch(push(routes.home)),
  changePassword: (oldPassword, newPassword) =>
    dispatch(changePassword(oldPassword, newPassword)),
});

export default connect(null, mapDispatchToProps)(ChangePassWord);
