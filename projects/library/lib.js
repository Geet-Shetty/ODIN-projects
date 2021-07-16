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
  myLibrary.forEach((book) => {
    // let row = document.createAttribute("tr");

    // let title_col = document.createAttribute("td");
    // let author_col = document.createAttribute("td");
    // let pages_col = document.createAttribute("td");
    // let status_col = document.createAttribute("td");

    // title_col.value = book.title;
    // author_col = book.author;
    // pages_col = book.pages;
    // status_col = book.read;

    // row.appendChild(title_col);
    // row.appendChild(author_col);
    // row.appendChild(pages_col);
    // row.appendChild(status_col);
    // table.appendChild(row);
    // table.innerHTML = "";
    const htmlBook = `
    <tr>
      <td>${book.name}</td>
      <td>${book.author}</td>
      <td>${book.read}</td>
      <td>${book.pages}</td>
    </tr>
    `;
    table.insertAdjacentHTML("afterend", htmlBook);
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
