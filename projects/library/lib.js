let myLibrary = [];

function Book(author, title, pages, read) {
  return {
    author: author,
    title: title,
    pages: pages,
    read: read,
  };
}

function addBookToLibrary(author, title, pages, read) {
  myLibrary.push(Book(author, title, pages, read));
}

const table = document.querySelector('tbody[id="table_content"]');

function displayLibrary() {
  table.innerHTML = "";
  myLibrary.forEach((book) => {
    table.innerHTML += `
    <tr>
      <td>${book.title}</td>
      <td>${book.author}</td>
      <td>${book.pages}</td>
      <td>${book.read}</td>
    </tr>
    `;
    // table.insertAdjacentHTML("afterbegin", htmlBook);
  });
}

const add_book_but = document.querySelector('button[id="add"]');

add_book_but.addEventListener("click", () => {
  const title = document.querySelector('input[id="title"]'); // could have just used the form here retard
  const author = document.querySelector('input[id="author"]');
  const pages = document.querySelector('input[id="pages"]');
  const read = document.querySelector('select[id="read"]');
  addBookToLibrary(
    author.value,
    title.value,
    pages.value,
    read[read.selectedIndex].value
  );
  displayLibrary();
});
