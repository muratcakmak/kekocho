import * as SearchApiUtil from '../util/search_api_util';

export const SEND_SEARCH = 'SEND_SEARCH';

export const receiveSearch = searchResult => ({
  type: SEND_SEARCH,
  searchResult,
});

export const sendSearch = query => dispatch => SearchApiUtil.sendSearch(query).then((searchResult) => dispatch(receiveSearch(searchResult)));
