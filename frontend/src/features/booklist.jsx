import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function BookList() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetch('/books/booklist/')
      .then(response => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error('Something went wrong');
        }
      })
      .then(data => {
        setBooks(data);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);
  console.log('Books:', books);

  return (
    <div className='flex flex-wrap text-white'>
    <h1>All Books</h1>
    {books.map((book, index) => (
      <div key={index} className='w-1/2 text-white sm:w-1/3 md:w-1/4 lg:w-1/4 xl:w-1/4 p-2'>
        <Link to={`/bookdetails/${encodeURIComponent(book.title)}`}>
          <h2>
            <a href={book.readLink} target='_blank' rel='noopener noreferrer'>
              {book.title}
            </a>
          </h2>
        </Link>
        {/* Display other book information as needed */}
        <img src={`https://covers.openlibrary.org/b/id/${book.imageLinks}-L.jpg`} alt={book.title} />
        <hr />
      </div>
    ))}
  </div>
  
  );
}

export default BookList;
