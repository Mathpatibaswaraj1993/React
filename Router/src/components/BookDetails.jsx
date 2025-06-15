import { useParams } from "react-router-dom";

function BookDeatils() {

    const { bookId } = useParams();
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
      
      const filteredBook = books.filter((e) => e.bookId === parseInt(bookId));

      return (
        <>
          {filteredBook.map((e) => (
            <div key={e.bookId} className="container mt-5 text-center shadow rounded-5">
                  <div className="card text-white bg-success mb-3" style={{ width: "300px" }}>
                <div className="card-header">Featured Book</div>
                <div className="card-body">
                  <h5 className="card-title">{e.title}</h5>
                  <p className="card-text">ID: {e.bookId}</p>
                  <p className="card-text">Author: {e.author}</p>
                  <p className="card-text">Genre: {e.genre}</p>
                  <p className="card-text">Price: ₹{e.price}</p>
                  <a href="#" className="btn btn-light">Buy Now</a>
                      </div>
                      <a href="Home">Back to Home</a>
              </div>
            </div>
          ))}
                
  
            
          

        </>
     )
}

export default BookDeatils      
