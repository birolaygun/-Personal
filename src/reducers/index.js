import { comments } from "../data";

const INITIAL_STATE = {
  comments,
};


export const reducer = (state = INITIAL_STATE, action) => {

  switch (action.type) {
    case "ADD_COMMENT":
      return {
        ...state,
        comments: [
          ...state.comments,
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

    case "DELETE_ITEM":
      return {
        ...state,
        comments: state.comments.filter(
          (comment) => comment.id !== action.payload
        ),
      };

    default:
      return state;
  }
};
