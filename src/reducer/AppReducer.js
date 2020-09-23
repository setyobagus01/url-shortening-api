export default (shortenlinks, action) => {
  switch (action.type) {
    case "ADD_SHORTEN":
      return [...shortenlinks, action.payload];
    default:
      return shortenlinks;
  }
};
