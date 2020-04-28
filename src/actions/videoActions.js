import axios from "axios";
import { push } from "connected-react-router";
import { routes } from "../containers/Router";

export const baseUrl =
  "https://mt5jvqqlt0.execute-api.us-east-1.amazonaws.com/v1";

export const setVideoAction = (videos) => ({
  type: "SET_VIDEOS_ACTION",
  payload: {
    videos,
  },
});

export const setVideoIdAction = (videoId) => ({
  type: "SET_VIDEO_ID_ACTION",
  payload: {
    videoId,
  },
});

export const setVideoDetailAction = (videoDetail) => ({
  type: "SET_VIDEO_DETAIL",
  payload: {
    videoDetail,
  },
});

export const getVideoDetails = (videoId) => async (dispatch) => {
  
  try {
    const response = await axios.get(
      `${baseUrl}/videos/info?videoId=${videoId}`
    );

    dispatch(setVideoDetailAction(response.data));
  } catch (error) {
    window.alert("Falha na renderização dos detalhes");
  }
};

export const updateCurrentPage = (page) => ({
  type: "SET_CURRENT_PAGE",
  payload: {
    page,
  },
});

export const getAllVideos = (page) => async (dispatch) => {
  try {
    const response = await axios.get(`${baseUrl}/videos/?page=${page}`);
    dispatch(setVideoAction(response.data));
    dispatch(updateCurrentPage(page));
  } catch (error) {
    console.log(error);
    window.alert("Erro de renderização");
  }
};

export const deleteVideo = (videoId) => async (dispatch) => {
  const token = window.localStorage.getItem("token");

  try {
    if (window.confirm("Deseja mesmo deletar esse video?")) {
      await axios.delete(`${baseUrl}/videos/delete/${videoId}`, {
        headers: {
          Authorization: token,
        },
      });
      console.log(videoId);
      window.alert("Video deletado com sucesso");
      dispatch(getAllVideos());
    }
  } catch (error) {
    window.alert("Não foi possivel deletar o vídeo");
  }
};

export const uploadVideo = (url, description, title) => async (dispatch) => {
  const input = {
    url,
    description,
    title,
  };

  const token = window.localStorage.getItem("token");

  try {
    await axios.post(`${baseUrl}/videos/upload`, input, {
      headers: {
        Authorization: token,
      },
    });
    window.alert("Video criado com sucesso");
    dispatch(push(routes.home));
  } catch (error) {
    window.alert("Não foi possivel adicionar o vídeo");
  }
};
