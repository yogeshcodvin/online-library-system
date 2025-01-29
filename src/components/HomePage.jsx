import { books } from "../utils/mockdata";
import { Link } from "react-router-dom";
import "../utils/HomePage.css";

function HomePage() {
  // Selecting popular books dynamically
  const popularBooks = books.slice(0, 4);

  return (
    <div className="container">
      <h1 className="header">Welcome to the Online Library System</h1>
      <ul className="category-list">
        <li>
        <Link to="/browse/Fiction" className="category-link">
            Fiction Books
        </Link>
        </li>
        <li>
        <Link to="/browse/Non-Fiction" className="category-link">
            Non-Fiction Books
        </Link>
        </li>
        <li>
        <Link to="/browse/Sci-Fi" className="category-link">
            Sci-Fi Books
        </Link>
        </li>
        <li>
        <Link to="/browse/Fantasy" className="category-link">
            Fantasy Books
        </Link>
        </li>
        <li>
        <Link to="/browse/Biography" className="category-link">
            Biographies
        </Link>
        </li>
    </ul>

    <div className="popular-books">
        <h2 className="popular-books-title">Popular Books</h2>
        <div className="popular-books-grid">
        {popularBooks.map((book) => (
            <div key={book.id} className="book-card">
            <img src={book.image} alt={book.title} />
            <div className="book-card-content">
                <h3 className="book-card-title">{book.title}</h3>
                <p className="book-card-author">{book.author}</p>
                <Link to={`/book/${book.id}`} className="details-link">
                View More Details
                </Link>
            </div>
            </div>
        ))}
        </div>
    </div>
    </div>
);
}

export default HomePage;
