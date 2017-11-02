import * as SearchApiUtil from '../util/search_api_util';

export const SEND_SEARCH = "SEND_SEARCH";

export const receiveSearch = (searchResult) => {
  return {
    type: SEND_SEARCH,
    searchResult
  };
};

export const sendSearch = query => dispatch => {
  return SearchApiUtil.sendSearch(query).then(searchResult => {
    return dispatch(receiveSearch(searchResult));
  });
};
