import { useState, useRef } from "react";
function App() {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [isbn, setIsbn] = useState("");

  const handleTitle = (e) => {
    setTitle(() => e.target.value);
  };

  const handleAuthor = (e) => {
    setAuthor(e.target.value);
  };

  const handleIsbn = (e) => {
    setIsbn(e.target.value);
  };
  // // create tr element
  const tblBody = document.querySelector("tbody");
  const tr = document.createElement("tr");

  const inputFocus = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title == "" || author == "" || isbn == "") {
      const errorMsgs = document.querySelectorAll(".error");

      errorMsgs.forEach((errorMsg) => {
        errorMsg.classList.add("active");

        setTimeout(() => {
          errorMsg.classList.remove("active");
          inputFocus.current.focus();
        }, 2000);
      });
    } else {
      const bookAddMsg = document.querySelector(".book_details p");

      bookAddMsg.classList.add("active");

      setTimeout(() => {
        bookAddMsg.classList.remove("active");
      }, 1000);

      const tdEl = document.createElement("td");

      tdEl.innerHTML = title;
      tr.appendChild(tdEl);
      const tdEl2 = document.createElement("td");

      tdEl2.innerHTML = author;
      tr.appendChild(tdEl2);
      const tdEl3 = document.createElement("td");
      tdEl3.innerHTML = isbn;
      tr.appendChild(tdEl3);

      // colseBtn create
      const closeBtn = document.createElement("i");
      closeBtn.className = "fa fa-close";
      tr.appendChild(closeBtn);
      tblBody.append(tr);
      // console.log(title, author, isbn);
    }
    setTitle("");
    setAuthor("");
    setIsbn("");
  };

  return (
    <>
      <div className="book_list">
        {/* <!-- header --> */}
        <header>
          <img src="images/open-book.png" alt="open-book" />
          <h1>
            My<span>Book</span>List
          </h1>
        </header>
        <div className="book_status">
          <div className="book_details">
            <p>Book Added</p>
          </div>
        </div>

        {/* <!-- form page --> */}
        <form onSubmit={handleSubmit}>
          <label>Title</label>
          <input
            type="text"
            value={title}
            ref={inputFocus}
            onChange={handleTitle}
            id="titleInput"
          />
          <div className="error">
            <span>Please Enter the Title Field</span>
            <i className="fa fa-exclamation-circle"></i>
          </div>

          <label>Author</label>
          <input
            type="text"
            value={author}
            onChange={handleAuthor}
            id="authorInput"
          />
          <div className="error">
            <span>Please Enter the Author Field</span>
            <i className="fa fa-exclamation-circle"></i>
          </div>

          <label>ISBN#</label>
          <input
            type="text"
            value={isbn}
            onChange={handleIsbn}
            id="isbnInput"
          />
          <div className="error p15">
            <span>Please Enter the ISBN# Field</span>
            <i className="fa fa-exclamation-circle"></i>
          </div>

          {/* <!-- btn --> */}
          <button id="btn">Submit</button>
        </form>

        {/* <!-- table --> */}
        <table>
          <thead>
            <tr>
              <th>Title</th>
              <th>Author</th>
              <th>ISBN#</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody></tbody>
        </table>
      </div>
    </>
  );
}

export default App;
