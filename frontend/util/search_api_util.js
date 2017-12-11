export const sendSearch = query => $.ajax({
  method: 'GET',
  url: `api/search/${query}`,
});
