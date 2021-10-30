
export const addcomment = (e, name, comment, photo) => {
  return { type: "ADD_COMMENT", payload:e, name, comment, photo };
};



export const deletee = (id) => {
  return { type: "DELETEE", payload:id };
};
