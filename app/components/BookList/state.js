const selectedBookReducer = (state = null, action) => {
  switch (action.type) {
    case 'SET_SELECTED_BOOK':
      return action.payload;
    default:
      return state;
  }
};

const setSelectedBookAC = bookTitle => ({
  type: 'SET_SELECTED_BOOK',
  payload: bookTitle,
});

const selectedBookTitleSelector = state => state.selectedBook;

export { setSelectedBookAC, selectedBookTitleSelector };

export default {
  selectedBook: selectedBookReducer,
};
