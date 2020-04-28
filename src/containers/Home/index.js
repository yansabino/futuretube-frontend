import React, { Fragment } from "react";
import { connect } from "react-redux";
import Header from "../../components/header";
import VideoCard from "../../components/videoCard";
import PermanentDrawerLeft from "../../components/sideMenu";
import { getAllVideos } from "../../actions/videoActions";
import { deleteVideo } from "../../actions/videoActions";
import { setVideoIdAction } from "../../actions/videoActions";
import { getUserById } from "../../actions/userActions";
import Loader from "../../components/loader";
import {
  Container,
  VideoContainer,
  BodyContainer,
  StyledButton,
  ButtonWrapper,
} from "../../style/homePage";
import { push } from "connected-react-router";
import { routes } from "../Router/";


class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchInput: "",
    };
  }

  componentDidMount() {
    this.props.getAllVideos(this.props.page);
  }

  handleLogOut = () => {
    localStorage.removeItem("token");
    window.alert("User Logout");
  };

  handleDeleteVideo = (videoId) => {
    this.props.deleteVideo(videoId);
  };

  handleSeachFieldChange = (event) => {
    this.setState({
      searchInput: event.target.value,
    });
  };

  goToNextPage = () => {
    this.props.getAllVideos(this.props.page + 1);
  };

  goToPreviusPage = () => {
    this.props.getAllVideos(this.props.page - 1);
  };

  searchVideo = () => {
    return this.props.videos.filter((video) => {
      if (
        video.title
          .toLowerCase()
          .indexOf(this.state.searchInput.toLowerCase()) !== -1
      ) {
        return true;
      }
    });
  };

  handleSetVideoId = (videoId) => {
    this.props.setVideoId(videoId)
    this.props.goToVideoDetails()
  }

  render() {
    const searchedVideo = this.searchVideo();

    const isVideosReady =
      this.props.videos.length === 0 ? (
        <Loader />
      ) : (
        <VideoContainer>
          {searchedVideo.map((video) => (
            <VideoCard
              key={video.videoId}
              videoUrl={video.url}
              videoTitle={video.title}
              deleteVideo={() => {
                this.handleDeleteVideo(video.videoId);
              }}
              videoDetails={() => this.handleSetVideoId(video.videoId)}
              userPicture={this.props.getUserById.picture}
              videoDescription={video.description}
            />
          ))}
        </VideoContainer>
      );

    const isLoggend = window.localStorage.getItem("token");
    let buttonRender;

    if (isLoggend) {
      buttonRender = (
        <Header
          onChangeSearchField={this.handleSeachFieldChange.bind(this)}
          value={this.state.searchInput}
          logout={this.handleLogOut}
        />
      );
    } else {
      buttonRender = (
        <Header
          onChangeSearchField={this.handleSeachFieldChange.bind(this)}
          value={this.state.searchInput}
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
            {isVideosReady}
            <ButtonWrapper>
              <StyledButton onClick={this.goToNextPage}>Avançar</StyledButton>
              <StyledButton onClick={this.goToPreviusPage}>voltar</StyledButton>
            </ButtonWrapper>
          </Container>
        </BodyContainer>
      </Fragment>
    );
  }
}

const mapStateToProps = (state) => ({
  videos: state.videos.allVideos,
  page: state.videos.currentPage,
});

const mapDispatchToProps = (dispatch) => ({
  getAllVideos: (page) => dispatch(getAllVideos(page)),
  deleteVideo: (videoId) => dispatch(deleteVideo(videoId)),
  getUserById: () => dispatch(getUserById()),
  goToSignUp: () => dispatch(push(routes.signup)),
  goToLogin: () => dispatch(push(routes.login)),
  goToChangePassword: () => dispatch(push(routes.changePassword)),
  goToUploadVideo: () => dispatch(push(routes.uploadVideo)),
  setVideoId: (videoId) => dispatch(setVideoIdAction(videoId)),
  goToVideoDetails: () => dispatch(push(routes.videoDetails))
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
