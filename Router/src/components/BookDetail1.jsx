import React from 'react';
import { useParams } from 'react-router-dom';

function BookDetail1() {
  const { title } = useParams();
  const decodedTitle = decodeURIComponent(title); // use title instead of author

  console.log("Title from URL:", decodedTitle); // debug log

  const books = [
    { bookId: 1, title: "The Silent Patient", author: "Alex Michaelides", genre: "Thriller", price: 399 },
    { bookId: 2, title: "Atomic Habits", author: "James Clear", genre: "Self-help", price: 499 },
    { bookId: 3, title: "The Alchemist", author: "Paulo Coelho", genre: "Fiction", price: 299 },
    { bookId: 4, title: "Educated", author: "Tara Westover", genre: "Memoir", price: 450 },
    { bookId: 5, title: "1984", author: "George Orwell", genre: "Dystopian", price: 349 },
    { bookId: 6, title: "To Kill a Mockingbird", author: "Harper Lee", genre: "Classic", price: 399 },
    { bookId: 7, title: "Rich Dad Poor Dad", author: "Robert T. Kiyosaki", genre: "Finance", price: 370 },
    { bookId: 8, title: "The Subtle Art of Not Giving a F*ck", author: "Mark Manson", genre: "Self-help", price: 430 },
    { bookId: 9, title: "The Great Gatsby", author: "F. Scott Fitzgerald", genre: "Classic", price: 320 },
    { bookId: 10, title: "Sapiens: A Brief History of Humankind", author: "Yuval Noah Harari", genre: "History", price: 550 }
  ];

  const filterb = books.filter((e) =>
    e.title.toLowerCase() === decodedTitle.toLowerCase()
  );

  return (
    <>
    {filterb.length !== 0 ? (
      <div className="d-flex justify-content-center align-items-center " style={{height:"100vh"}}>
        <div className='bg-primary border p-2 rounded-circle container-xl' style={{ width:'1200px',  textAlign:'center' }}>
          {filterb.map((e) => (
            <div key={e.bookId}>
              <h3>Book Id: {e.bookId}</h3>
              <p>Title: {e.title}</p>
              <p>Author: {e.author}</p>
              <p>Genre: {e.genre}</p>
              <p>Price: ₹{e.price}</p>
            </div>
          ))}
        </div>
      </div>
    ) : (
      <div className="d-flex justify-content-center align-items-center" style={{ height: '100vh' }}>
        <h4 className="text-danger">Book Not Found</h4>
      </div>
    )}
  </>
  
  );
}

export default BookDetail1;
