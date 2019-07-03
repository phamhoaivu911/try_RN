import { createSelector } from 'reselect';
import { values } from 'lodash/fp';

import { selectedBookTitleSelector } from '../BookList/state';
import { booksDataSelector } from '../../apiCalls/list';

const selectedBookSelector = state => {
  const bookTitle = selectedBookTitleSelector(state);
  const booksData = booksDataSelector(state);
  const booksDataArray = values(booksData);
  const selectedBook = booksDataArray.find(book => book.title === bookTitle);
  return selectedBook;
};

const publisherSelector = state => {
  const selectedBook = selectedBookSelector(state);
  if (!selectedBook.publishers) return null;
  return selectedBook.publishers[0] && selectedBook.publishers[0].name;
};

const authorSelector = state => {
  const selectedBook = selectedBookSelector(state);
  if (!selectedBook.authors) return null;
  return selectedBook.authors[0] && selectedBook.author[0].name;
};

const publishDateSelector = createSelector(
  booksDataSelector,
  selectedBookTitleSelector,
  (booksData, selectedBookTitle) => {
    const booksDataArray = values(booksData);
    const selectedBook = booksDataArray.find(
      book => book.title === selectedBookTitle
    );
    return selectedBook.publish_date;
  }
);

export { publisherSelector, authorSelector, publishDateSelector };
