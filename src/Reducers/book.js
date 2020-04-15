
const book = (state = [], action) => {
  const { book, type, index } = action;
  switch (type) {
    case 'CREATE_BOOK':
      book.id = Math.random() + Date().toString();
      return [book, ...state];
    case 'REMOVE_BOOK':
      return [...state.slice(0, index), ...state.slice(index + 1)];
    case 'UPDATE_BOOK':
      return [...state.slice(0, index), book, ...state.slice(index + 1)];
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
};


export { book, bookfilter };
