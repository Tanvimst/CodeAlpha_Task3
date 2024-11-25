// Save to localStorage
function saveBooks() {
  localStorage.setItem('bookList', JSON.stringify(bookList));
}

// Load from localStorage
function loadBooks() {
  const storedBooks = JSON.parse(localStorage.getItem('bookList'));
  if (storedBooks) {
    bookList.push(...storedBooks);
    renderBooks();
  }
}
