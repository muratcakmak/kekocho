import * as SearchApiUtil from '../api/search';

export const SEND_SEARCH = 'SEND_SEARCH';

export const receiveSearch = searchResult => ({
  type: SEND_SEARCH,
  searchResult,
});

export const sendSearch = query => dispatch => SearchApiUtil.sendSearch(query).then((searchResult) => dispatch(receiveSearch(searchResult)));
