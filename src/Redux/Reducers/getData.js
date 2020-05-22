export default function getData(state = { items: [] }, action) {
  switch (action.type) {
    case "ADD_DATA":
      return { ...state, items: action.payload };
    default:
      return state;
  }
}
