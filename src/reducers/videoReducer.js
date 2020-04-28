const inicialState = {
    allVideos: [],
    selectedVideo: {},
    selectedVideoId: "",
    currentPage: 1
}

const videos = (state = inicialState, action) =>{
    switch(action.type){
        case "SET_VIDEOS_ACTION":
            return {...state, allVideos: action.payload.videos}
        case "SET_VIDEO_ID_ACTION":
            return {...state, selectedVideoId: action.payload.videoId}
        case "SET_VIDEO_DETAIL":
            return {...state, selectedVideo: action.payload.videoDetail}
        case "SET_CURRENT_PAGE":
            return {...state, currentPage: action.payload.page}
        default:
            return state
    }
}

export default videos