import { yorumlar } from "../data";

const INITIAL_STATE = {
  yorumlar,
};


export const reducer = (state = INITIAL_STATE, action) => {

  switch (action.type) {
    case "ADD_COMMENT":
      return {
        ...state,
        yorumlar: [
          ...state.yorumlar,
          {
            name: action.name,
            photo: action.photo,
            comment: action.comment,
            id: Math.random(),
            backgroundColor:
              "#" + (((1 << 24) * Math.random()) | 0).toString(16),
          },
        ],
      };

    case "DELETEE":
      return {
        ...state,
        yorumlar: state.yorumlar.filter((comm) => comm.id !== action.payload),
      };


    default:
      return state;
  }
};
