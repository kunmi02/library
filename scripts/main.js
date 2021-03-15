const myLibrary = [
  {
    author: 'John',
    total_number_of_pages: 20,
    title: 'xx@hotmail.com',
    read: 'read',
  }, {
    author: 'Jack',
    total_number_of_pages: 50,
    title: 'xxx@hotmail.com',
    read: 'read',
  }, {
    author: 'Son',
    total_number_of_pages: 45,
    title: 'xxxx@hotmail.com',
    read: 'not read',
  },
];

function myFunction() {
  const x = document.getElementById('myDIV');
  if (x.style.display === 'none') {
    x.style.display = 'block';
  } else {
    x.style.display = 'none';
  }
}

function Book(title, author, total_number_of_pages, read) {
  this.title = title;
  this.author = author;
  this.total_number_of_pages = total_number_of_pages;
  this.read = read;
}

function addBookToLibrary() {
  const title = document.getElementById('title').value;
  const author = document.getElementById('author').value;
  const page_num = document.getElementById('page_num').value;
  const read = document.getElementById('read').value;
  const new_book = new Book(title, author, page_num, read);
  myLibrary.push(new_book);

  document.getElementById('title').value = '';
  document.getElementById('author').value = '';
  document.getElementById('page_num').value = '';
  document.getElementById('read').value = '';
  showLibrary();
}

function deleteBook(index) {
  console.log('This book has been deleted');
  myLibrary.splice(index, 1);
  showLibrary();
}

function updateReadStatus(index) {
  read_status = myLibrary[index].read;
  if (read_status == 'read') {
    myLibrary[index].read = 'not read';
    showLibrary();
  } else if (read_status == 'not read') {
    myLibrary[index].read = 'read';
    showLibrary();
  } else {
    alert('Choose valid options');
  }
}


function showLibrary() {
  const body = document.getElementsByTagName('body')[0];
  const tbl = document.createElement('table');
  tbl.style.width = '100%';
  tbl.setAttribute('border', '1');
  const tbdy = document.createElement('tbody');
  var tr = document.createElement('tr');
  const td1 = document.createElement('td');
  td1.appendChild(document.createTextNode('Title'));
  tr.appendChild(td1);
  const td2 = document.createElement('td');
  td2.appendChild(document.createTextNode('Author'));
  tr.appendChild(td2);
  var td5 = document.createElement('td');
  td5.appendChild(document.createTextNode('Number of pages'));
  tr.appendChild(td5);

  var td5 = document.createElement('td');
  td5.appendChild(document.createTextNode('Has the book read?'));
  tr.appendChild(td5);

  var td5 = document.createElement('td');
  td5.appendChild(document.createTextNode('Delete Books'));
  tr.appendChild(td5);
  var td5 = document.createElement('td');
  td5.appendChild(document.createTextNode('change read status'));
  tr.appendChild(td5);
  tbdy.appendChild(tr);
  if (myLibrary.length < 1) {
    var tr = document.createElement('tr');
    tr.appendChild(document.createTextNode('No Books Available'));
    tbdy.appendChild(tr);
  } else {
    for (let i = 0; i < myLibrary.length; i++) {
      var tr = document.createElement('tr');

      const td33 = document.createElement('td');
      td33.appendChild(document.createTextNode(myLibrary[i].title));
      tr.appendChild(td33);

      const td313 = document.createElement('td');
      td313.appendChild(document.createTextNode(myLibrary[i].author));
      tr.appendChild(td313);

      var td303 = document.createElement('td');
      td303.appendChild(document.createTextNode(myLibrary[i].total_number_of_pages));
      tr.appendChild(td303);

      var td303 = document.createElement('td');
      td303.appendChild(document.createTextNode(myLibrary[i].read));
      tr.appendChild(td303);

      const index = i;


      const td3 = document.createElement('td');
      const delete_button = document.createElement('button');
      delete_button.innerHTML = 'Delete Book';
      delete_button.onclick = function () {
        deleteBook(index);
      };
      td3.appendChild(delete_button);
      tr.appendChild(td3);

      const td4 = document.createElement('td');
      const read_button = document.createElement('button');
      read_button.innerHTML = 'Change read status of book';
      read_button.onclick = function () {
        updateReadStatus(index);
      };
      td4.appendChild(read_button);
      tr.appendChild(td4);
      tbdy.appendChild(tr);
    }
  }
  tbl.appendChild(tbdy);
  body.appendChild(tbl);
}
showLibrary();