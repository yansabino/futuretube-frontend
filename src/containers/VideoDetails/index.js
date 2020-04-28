import React, { Fragment } from "react";
import { connect } from "react-redux";
import HeaderVideoDetails from "../../components/headerVideoDetails";
import PermanentDrawerLeft from "../../components/sideMenu";
import { push } from "connected-react-router";
import { routes } from "../Router/";
import { BodyContainer, Container } from "../../style/homePage";
import {
  VideoDetailsContainer,
  StyledIFrame,
  StyledButton,
  ButtonWrapper,
} from "../../style/videoDetails";
import { getVideoDetails } from "../../actions/videoActions";

class VideoDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchInput: "",
    };
  }

  componentDidMount() {
    if (this.props.selectedVideoId !== "") {
      this.props.getVideoDetails(this.props.selectedVideoId);
    } else {
      window.alert("Erro ao selecionar o Video");
      this.props.goToHome();
    }
  }

  handleLogOut = () => {
    localStorage.removeItem("token");
    window.alert("User Logout");
  };

  handleSeachFieldChange = (event) => {
    this.setState({
      searchInput: event.target.value,
    });
  };

  render() {
    const isLoggend = window.localStorage.getItem("token");
    let buttonRender;

    if (isLoggend) {
      buttonRender = <HeaderVideoDetails logout={this.handleLogOut} />;
    } else {
      buttonRender = (
        <HeaderVideoDetails
          goToSignUp={this.props.goToSignUp}
          goToLogin={this.props.goToLogin}
        />
      );
    }
    return (
      <Fragment>
        <BodyContainer>
          {buttonRender}
          <Container>
            <PermanentDrawerLeft
              password={this.props.goToChangePassword}
              upload={this.props.goToUploadVideo}
            />
            <VideoDetailsContainer>
              <StyledIFrame
                width="1100"
                height="600"
                src={this.props.selectedVideo.url}
                frameborder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allownetworking="internal"
                allowFullScreen
              />
              <h3>{this.props.selectedVideo.title}</h3>
              <h4>{this.props.selectedVideo.description}</h4>
              <ButtonWrapper>
                <StyledButton onClick={this.props.goToHome}>
                  Voltar
                </StyledButton>
              </ButtonWrapper>
            </VideoDetailsContainer>
          </Container>
        </BodyContainer>
      </Fragment>
    );
  }
}

const mapStateToProps = (state) => ({
  selectedVideoId: state.videos.selectedVideoId,
  selectedVideo: state.videos.selectedVideo,
});

const mapDispatchToProps = (dispatch) => ({
  goToSignUp: () => dispatch(push(routes.signup)),
  goToLogin: () => dispatch(push(routes.login)),
  goToChangePassword: () => dispatch(push(routes.changePassword)),
  goToUploadVideo: () => dispatch(push(routes.uploadVideo)),
  goToHome: () => dispatch(push(routes.home)),
  getVideoDetails: (videoId) => dispatch(getVideoDetails(videoId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(VideoDetails);
