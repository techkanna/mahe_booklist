import { useState, useRef } from "react";

function App() {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [isbn, setIsbn] = useState("");

  const [titleIsTouched, setTitleIsTouched] = useState(false);
  const [authorIsTouched, setAuthorIsTouched] = useState(false);
  const [isbnIsTouched, setIsbnIsTouched] = useState(false);
  const [message, setMessage] = useState('');
  const [bookList, setBookList] = useState([])
  const inputFocus = useRef();

  const handleTitle = (e) => {
    setTitleIsTouched(true)
    setTitle(() => e.target.value);
  };

  const handleAuthor = (e) => {
    setAuthorIsTouched(true)
    setAuthor(e.target.value);
  };

  const handleIsbn = (e) => {
    setIsbnIsTouched(true)
    setIsbn(e.target.value);
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    
    const newBook ={title, author, isbn}

    bookList.push(newBook)

    setBookList(bookList)

    setTitle("");
    setAuthor("");
    setIsbn("");
    setTitleIsTouched(false)
    setAuthorIsTouched(false)
    setIsbnIsTouched(false)
    setMessage('Book Added')
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
        {message && 
        <div className="book_status">
          <div className="book_details"> 
            <p>{message}</p>
            <button onClick={()=> setMessage('')}>X</button>
          </div>
        </div>
        }

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

          {(title === "" && titleIsTouched) ? (
          <div className="error">
            <span>Please Enter the Title Field</span>
            <i className="fa fa-exclamation-circle"></i>
          </div>
          ): ''}

          <label>Author</label>
          <input
            type="text"
            value={author}
            onChange={handleAuthor}
            id="authorInput"
          />
          {(author === '' && authorIsTouched) && (
          <div className="error">
            <span>Please Enter the Author Field</span>
            <i className="fa fa-exclamation-circle"></i>
          </div>
          )}

          <label>ISBN#</label>
          <input
            type="text"
            value={isbn}
            onChange={handleIsbn}
            id="isbnInput"
          />
          {(isbn === '' && isbnIsTouched) && (
          <div className="error p15">
            <span>Please Enter the ISBN# Field</span>
            <i className="fa fa-exclamation-circle"></i>
          </div>
          )}

          {/* <!-- btn --> */}
          <button className='btn' disabled={title === "" || author === "" || isbn === ""} id="btn">Submit</button>
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
          <tbody>
            {bookList.map(book=>{
              return (
                <tr>
                  <td>{book.title}</td>
                  <td>{book.author}</td>
                  <td>{book.isbn}</td>
                  <td><i className='fa fa-close'></i></td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default App;
