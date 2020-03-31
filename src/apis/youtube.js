import axios from "axios";

const YOUTUBEKEY = "AIzaSyD7LR80eoW290G5_x36UoP2yQQaAl6-UW4";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    type: "video",
    maxResults: 5,
    key: YOUTUBEKEY
  }
});
