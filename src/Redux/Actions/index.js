export const addData = (data) => {
  return {
    type: "ADD_DATA",
    payload: data,
  };
};

export const getCategory = (data) => {
  return {
    type: "GET_CATEGORY",
    pickedCategory: data,
  };
};
