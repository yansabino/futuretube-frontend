import React, { Fragment } from "react";
import { connect } from "react-redux";
import futuretube from "../../images/futuretube.png";
import { uploadVideo } from "../../actions/videoActions";
import TextField from "@material-ui/core/TextField";
import { push } from "connected-react-router";
import { routes } from "../Router/";
import { UploadWrapper, ImgContainer, StyledImg, StyledButton } from "../../style/uploadVideos"

const uploadVideoForm = [
    {
        name: "title",
        type: "text",
        label: "Título",
        required: true,
        
    },
    {
        name: "description",
        type: "text",
        label: "Descrição",
        required: true,
        
    },
    {
        name: "url",
        type: "text",
        label: "URL (YouTube Embed)",
        required: true,
        
    },
]

class UploadVideo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      form: {},
    };
  }

  componentDidMount() {
    const token = window.localStorage.getItem("token");
    if (token === null) {
      window.alert("Usuário precisa estar logado");
      this.props.goToHome();
    }
  }

  handleFieldChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleUploadButton = (event) => {
    event.preventDefault();
    const { url, description, title } = this.state;
    this.props.upload(url, description, title);

    this.setState({ form: {} });
  };

  render() {
    return (
        <Fragment>
        <UploadWrapper onSubmit={this.handleUploadButton}>
          <ImgContainer>
            <StyledImg src={futuretube} alt="Logo" />
            <h4>Upload Video</h4>
          </ImgContainer>
          {uploadVideoForm.map((input) => (
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

          <StyledButton type="submit">Upload</StyledButton>
        </UploadWrapper>
      </Fragment>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  goToHome: () => dispatch(push(routes.home)),
  upload: (url, description, title) =>
    dispatch(uploadVideo(url, description, title)),
});

export default connect(null, mapDispatchToProps)(UploadVideo);
