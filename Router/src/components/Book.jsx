import React from 'react'
import { Link } from 'react-router-dom';
function Book() {
  const books = [
    {
      bookId: 1,
      title: "The Silent Patient",
      author: "Alex Michaelides",
      genre: "Thriller",
      price: 399
    },
    {
      bookId: 2,
      title: "Atomic Habits",
      author: "James Clear",
      genre: "Self-help",
      price: 499
    },
    {
      bookId: 3,
      title: "The Alchemist",
      author: "Paulo Coelho",
      genre: "Fiction",
      price: 299
    },
    {
      bookId: 4,
      title: "Educated",
      author: "Tara Westover",
      genre: "Memoir",
      price: 450
    },
    {
      bookId: 5,
      title: "1984",
      author: "George Orwell",
      genre: "Dystopian",
      price: 349
    },
    {
      bookId: 6,
      title: "To Kill a Mockingbird",
      author: "Harper Lee",
      genre: "Classic",
      price: 399
    },
    {
      bookId: 7,
      title: "Rich Dad Poor Dad",
      author: "Robert T. Kiyosaki",
      genre: "Finance",
      price: 370
    },
    {
      bookId: 8,
      title: "The Subtle Art of Not Giving a F*ck",
      author: "Mark Manson",
      genre: "Self-help",
      price: 430
    },
    {
      bookId: 9,
      title: "The Great Gatsby",
      author: "F. Scott Fitzgerald",
      genre: "Classic",
      price: 320
    },
    {
      bookId: 10,
      title: "Sapiens: A Brief History of Humankind",
      author: "Yuval Noah Harari",
      genre: "History",
      price: 550
    }
  ];
  
  return (
    <>
    <div className='container'>
                <div className='text-center text-danger'>MapFilterExample
                    <h2 className='text-primary mt-5'>Show Book Info using Map</h2>
                    <table class="table table-striped w-70 p-4 m-auto">
                        <thead>
                            <tr>
                                <th scope="col">Book Id </th>
                                <th scope="col">Title</th>
                                <th scope="col">Author</th>
                                <th scope="col">Genre</th>
                                <th scope="col">Price</th>

                            </tr>
                        </thead>
                        <tbody>
    
                            {
                                books.map((e) => {
                                    return (
                                      <tr>
                                           <td><Link to={`${e.bookId}`}>{e.bookId}</Link></td>

                                                {/* <td>{e.bookId}</td>
                                                <td>{e.title}</td>
                                                <td>{e.author}</td>
                                                <td>{e.genre}</td>
                                                <td>{e.price}</td> */}

                                            </tr>
                                    )
                                })
    
                            }
                        </tbody>
                    </table>
        </div>
        </div>    
    </>)
}

export default Book