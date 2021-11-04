
export const addComment = (e, name, comment, photo) => {
  return { type: "ADD_COMMENT", payload:e, name, comment, photo };
};



export const deleteItem = (id) => {
  return { type: "DELETE_ITEM", payload:id };
};
