const INITIAL_STATE = {
  pickedCategory: "전체보기",
};

export default function getCategory(state = INITIAL_STATE, action) {
  switch (action.type) {
    case "ADD_CATEGORY":
      return { ...state, pickedCategory: action.pickedCate };
    default:
      return state;
  }
}
