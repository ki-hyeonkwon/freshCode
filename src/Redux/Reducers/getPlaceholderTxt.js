const INITIAL_STATE = {
  placeholder: null,
};

export default function getPlaceholderTxt(state = INITIAL_STATE, action) {
  switch (action.type) {
    case "GET_TEXT":
      return {
        ...state,
        placeholder: action.placeholder.toLocaleDateString(),
      };
    default:
      return state;
  }
}
