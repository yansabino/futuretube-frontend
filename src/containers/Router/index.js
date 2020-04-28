import React from "react";
import { ConnectedRouter } from "connected-react-router";
import { Switch, Route } from "react-router-dom";
import Login from "../LoginPage";
import SignUp from "../SignUp"
import Home from "../Home"
import ChangePassword from "../ChangePassword"
import UploadVideo from "../UploadVideo"
import VideoDetails from "../VideoDetails"


export const routes = {
  login: "/login",
  signup: "/signup",
  home: "/",
  changePassword: "/changePassword",
  uploadVideo: "/videos/upload",
  videoDetails: "/videos/details"
};

function Router(props) {
  return (
    <ConnectedRouter history={props.history}>
      <Switch>
        <Route exact path={routes.login} component={Login} />
        <Route exact path={routes.signup} component={SignUp} />
        <Route exact path={routes.home} component={Home} />
        <Route exact path={routes.changePassword} component={ChangePassword} />
        <Route exact path={routes.uploadVideo} component={UploadVideo} />
        <Route exact path={routes.videoDetails} component={VideoDetails} />
      </Switch>
    </ConnectedRouter>
  );
}

export default Router;
