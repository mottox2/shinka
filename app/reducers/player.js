// @flow
import { SET_VIDEO_ID } from '../actions/player';

export type counterStateType = {
  +counter: number
};

type actionType = {
  +type: string
};

const initialState = {
  videoId: null
};

export default function counter(state = initialState, action: actionType) {
  switch (action.type) {
    case SET_VIDEO_ID:
      return {
        ...state,
        videoId: action.payload.videoId
      };
    default:
      return state;
  }
}
