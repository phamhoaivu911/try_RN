import { makeFetchAction } from 'redux-api-call';

const endpoint =
  'https://openlibrary.org/api/books?bibkeys=ISBN:0385472579,LCCN:62019420,ISBN:9780980200447,ISBN:978-1-60309-036-0,ISBN:978-1-60309-089-6,ISBN:978-1-60309-410-8&format=json&jscmd=data';

const method = 'GET';

// fetch -> response -> json -> dispatch action -> redux store
// create selector -> get data
// create reducer for error
// create selector -> get error
// kkjkdd
//
const REDUCER_KEY = 'FETCH_BOOKS';

const result = makeFetchAction(REDUCER_KEY, () => ({
  endpoint,
  method,
}));

export const {
  actionCreator: fetchBooksAC,
  dataSelector: booksDataSelector,
  errorSelector,
  isFetchingSelector: isFetchingBooksSelector,
} = result;
