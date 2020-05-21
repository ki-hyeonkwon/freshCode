export default function getData(state = { items: [] }, action) {
  switch (action.type) {
    case "ADD_DATA":
      return { item: action.payload };
    default:
      return state;
  }
}
