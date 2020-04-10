

const book = (state = [], action) => {
  const { book, type, store } = action;
  switch (type) {
    case 'CREATE_BOOK':
      book.id = Math.random() + Date().toString();
      return [...state, book];
    case 'REMOVE_BOOK':
      return [...state.slice(0, action.index), ...state.slice(action.index + 1)];
    case 'UPDATE_BOOK':
      return [...state.slice(0, action.index), book, ...state.slice(action.index + 1)];
    default:
      return state;
  }
};

const bookfilter = (state = 'Action', action) => {
  const { category, type } = action;
  switch (type) {
    case 'FILTER_BOOK':
      return category;
    default:
      return state;
  }
}


export { book, bookfilter };
