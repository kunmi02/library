let myLibrary = [{
  author: "John",
  total_number_of_pages: 20,
  title: "xx@hotmail.com",
  read: "read"
}, {
  author: "Jack",
  total_number_of_pages: 50,
  title: "xxx@hotmail.com",
  read: "read"
}, {
  author: "Son",
  total_number_of_pages: 45,
  title: "xxxx@hotmail.com",
  read: "not read"
}];

function myFunction() {
  var x = document.getElementById("myDIV");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

function Book(title, author, total_number_of_pages, read) {
  this.title = title
  this.author = author
  this.total_number_of_pages = total_number_of_pages
  this.read = read
}

function addBookToLibrary() {
let title = document.getElementById("title").value;
let author = document.getElementById("author").value;
let page_num = document.getElementById("page_num").value;
let read = document.getElementById("read").value;
const new_book = new Book(title, author, page_num, read)
myLibrary.push(new_book);
showLibrary()
document.getElementById("title").value = '';
document.getElementById("author").value = '';
document.getElementById("page_num").value = '';
document.getElementById("read").value = '';

}

function deleteBook(book){
  console.log('This book has been deleted')
  console.log(book.title)

}

function showLibrary(){
var html = "<table border='1|1|1'>";
html+="<tr>"
html+="<td> Title </td>"
html+="<td> Author </td>"
html+="<td> Number of pages </td>"
html+="<td> Book has been read ? </td>"
html+="<td> Delete book</td>"
html+="<td> change read status </td>"
html+="</tr>"
if (myLibrary.length < 1){
  html+="<tr>"
  html+="<td> No books available in your library </td>"
  html+="</tr>"
}else{
for (var i = 0; i < myLibrary.length; i++) {
  html+="<tr>";
  html+="<td>"+myLibrary[i].title+"</td>";
  html+="<td>"+myLibrary[i].author+"</td>";
  html+="<td>"+myLibrary[i].total_number_of_pages+"</td>";
  html+="<td>"+myLibrary[i].read+"</td>";
  html+="<td><button onclick=deleteBook(myLibrary[i])> Delete books </button></td>"
  html+="<td><button>  Change read status</button></td>"
  html+="</tr>";

}
}
html+="</table>";
document.getElementById("box").innerHTML = html;
}
showLibrary()