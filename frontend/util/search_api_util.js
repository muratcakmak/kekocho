export const sendSearch = (query) => {
  debugger
  return $.ajax({
    method: "GET",
    url: `api/search/${query}`
  });
};
