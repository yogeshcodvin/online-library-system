import { useParams, Link } from "react-router-dom";
import { books, categories } from "../utils/mockdata";
import { useEffect, useState } from "react";
import "../utils/BrowseBooksPage.css"; // Import CSS
import { useSelector } from "react-redux";

function BrowseBooksPage() {
    const { category } = useParams();
    const [text, setText] = useState("");
    const [filteredBooks, setFilteredBooks] = useState([]);

    const books = useSelector((state) => state.books);

useEffect(() => {
    const categoryFilteredBooks = category
        ? books.filter((book) => book.category === category)
        : books;

    const searchFilteredBooks = categoryFilteredBooks.filter((book) =>
        book.title.toLowerCase().includes(text.toLowerCase())
    );

    setFilteredBooks(searchFilteredBooks);
    }, [category, text]);

    return (
    <div className="container">
        <div className="search">
        <h1>Search Books Here</h1>
        <input
            type="text"
            placeholder="Search books..."
            onChange={(e) => setText(e.target.value)}
            value={text}
        />
        </div>

        <div className="categories">
        {categories.map((categ) => (
            <Link key={categ} to={`/browse/${categ}`} className={`filter-tag ${category === categ ? "active" : ""}`}>
            {categ.charAt(0).toUpperCase() + categ.slice(1)}
            </Link>
        ))}
        </div>

        <div className="books-list">
        {filteredBooks.length > 0 ? (
            filteredBooks.map((book) => (
            <div className="book-card" key={book.id}>
                <img src={book.image} alt={book.title} />
                <h3>{book.title}</h3>
                <Link to={`/book/${book.id}`} className="details-link">
                View More Details
                </Link>
            </div>
            ))
        ) : (
            <p className="no-books">No books found in this category.</p>
        )}
        </div>
    </div>
    );
}

export default BrowseBooksPage;
