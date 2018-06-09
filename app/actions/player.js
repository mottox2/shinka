// @flow
export const SET_VIDEO_ID = 'SET_VIDEO_ID';

export function setVideoId(videoId) {
  return {
    type: SET_VIDEO_ID,
    payload: { videoId }
  };
}
