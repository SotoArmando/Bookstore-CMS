const books = (state = [

], { action, book }) => {
    switch (action) {
        case 'CREATE_BOOK':
            return [...state, book]
        case 'REMOVE_BOOK':
            return state.filter(yield_book => yield_book.id !== book.id)
        default:
            return state
    }
}

export default books