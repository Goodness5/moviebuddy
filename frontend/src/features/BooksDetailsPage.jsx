import React from 'react';
import { useParams } from 'react-router-dom';

const BookDetailsPage = ({ books }) => {
  const { bookTitle } = useParams();
  const bookDetails = books.find(book => book.title === decodeURIComponent(bookTitle));

  if (!bookDetails) {
    return <div>Loading...</div>;
  }

  return (
    <div className="m-auto w-3/4 rounded-lg border border-red-700 bg-[#5a4747]">
      <h1>{bookDetails.title}</h1>
      {/* Display other book details as needed */}
    </div>
  );
};

export default BookDetailsPage;
