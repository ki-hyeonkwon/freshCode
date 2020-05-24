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
