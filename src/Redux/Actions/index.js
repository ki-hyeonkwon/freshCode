export const addData = (data) => {
  return {
    type: "ADD_DATA",
    payload: data,
  };
};

export const addCategory = (data) => {
  return {
    type: "ADD_CATEGORY",
    pickedCate: data,
  };
};

export const closeModal = (text) => {
  return {
    type: "CLOSE_MODAL",
    placeholder: text,
  };
};

export const openModal = () => {
  return {
    type: "OPEN_MODAL",
  };
};

export const getText = (text) => {
  return {
    type: "GET_TEXT",
    placeholder: text,
  };
};
