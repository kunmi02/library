const myLibrary = [
  {
    author: 'John',
    totalNumberOfPages: 20,
    title: 'xx@hotmail.com',
    read: 'read',
  }, {
    author: 'Jack',
    totalNumberOfPages: 50,
    title: 'xxx@hotmail.com',
    read: 'read',
  }, {
    author: 'Son',
    totalNumberOfPages: 45,
    title: 'xxxx@hotmail.com',
    read: 'not read',
  },
];

const AddBookButton = document.getElementById('add_book_button');
AddBookButton.onclick = function () {
  const x = document.getElementById('myDIV');
  if (x.style.display === 'none') {
    x.style.display = 'block';
  } else {
    x.style.display = 'none';
  }
};

function Book(title, author, totalNumberOfPages, read) {
  this.title = title;
  this.author = author;
  this.totalNumberOfPages = totalNumberOfPages;
  this.read = read;
}

function showLibrary() {
  const body = document.getElementsByTagName('body')[0];
  const tbl = document.createElement('table');
  tbl.style.width = '100%';
  tbl.setAttribute('border', '1');
  const tbdy = document.createElement('tbody');
  const tr = document.createElement('tr');
  const td1 = document.createElement('td');
  td1.appendChild(document.createTextNode('Title'));
  tr.appendChild(td1);
  const td2 = document.createElement('td');
  td2.appendChild(document.createTextNode('Author'));
  tr.appendChild(td2);
  const td5 = document.createElement('td');
  td5.appendChild(document.createTextNode('Number of pages'));
  tr.appendChild(td5);

  const td55 = document.createElement('td');
  td55.appendChild(document.createTextNode('Has the book read?'));
  tr.appendChild(td55);

  const td555 = document.createElement('td');
  td555.appendChild(document.createTextNode('Delete Books'));
  tr.appendChild(td555);
  const td51 = document.createElement('td');
  td51.appendChild(document.createTextNode('change read status'));
  tr.appendChild(td51);
  tbdy.appendChild(tr);
  if (myLibrary.length < 1) {
    const tr = document.createElement('tr');
    tr.appendChild(document.createTextNode('No Books Available'));
    tbdy.appendChild(tr);
  } else {
    for (let i = 0; i < myLibrary.length; i += 1) {
      const tr = document.createElement('tr');

      const td33 = document.createElement('td');
      td33.appendChild(document.createTextNode(myLibrary[i].title));
      tr.appendChild(td33);

      const td313 = document.createElement('td');
      td313.appendChild(document.createTextNode(myLibrary[i].author));
      tr.appendChild(td313);

      const td303 = document.createElement('td');
      td303.appendChild(document.createTextNode(myLibrary[i].totalNumberOfPages));
      tr.appendChild(td303);

      const td309 = document.createElement('td');
      td309.appendChild(document.createTextNode(myLibrary[i].read));
      tr.appendChild(td309);

      const index = i;


      const td03 = document.createElement('td');
      const DeleteButton = document.createElement('button');
      DeleteButton.innerHTML = 'Delete Book';
      DeleteButton.onclick = function () {
        deleteBook(index);
      };
      td03.appendChild(DeleteButton);
      tr.appendChild(td03);

      const td04 = document.createElement('td');
      const ReadButton = document.createElement('button');
      ReadButton.innerHTML = 'Change read status of book';
      ReadButton.onclick = function () {
        updateReadStatus(index);
      };
      td04.appendChild(ReadButton);
      tr.appendChild(td04);
      tbdy.appendChild(tr);
    }
  }
  tbl.appendChild(tbdy);
  body.appendChild(tbl);
}

const AddBookToLibraryButton = document.getElementById('add_book_library');
AddBookToLibraryButton.onclick = function () {
  const title = document.getElementById('title').value;
  const author = document.getElementById('author').value;
  const pageNumber = document.getElementById('pageNumber').value;
  const read = document.getElementById('read').value;
  const NewBook = new Book(title, author, pageNumber, read);
  myLibrary.push(NewBook);

  document.getElementById('title').value = '';
  document.getElementById('author').value = '';
  document.getElementById('pageNumber').value = '';
  document.getElementById('read').value = '';
  showLibrary();
};

function deleteBook(index) {
  console.log('This book has been deleted');
  myLibrary.splice(index, 1);
  showLibrary();
}

function updateReadStatus(index) {
  const ReadStatus = myLibrary[index].read;
  if (ReadStatus === 'read') {
    myLibrary[index].read = 'not read';
    showLibrary();
  } else if (ReadStatus === 'not read') {
    myLibrary[index].read = 'read';
    showLibrary();
  } else {
    alert('Choose valid options');
  }
}

showLibrary();