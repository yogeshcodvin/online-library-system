import { useParams } from "react-router-dom";
import { books } from "../utils/mockdata";
import { Link } from "react-router-dom";
import "../utils/BrowseDetailsPage.css"; // Import CSS for styling

function BrowseDetailsPage() {
    const { id } = useParams();
    const book = books.find((b) => b.id === Number(id));

    if (!book) {
    return <h2>Book not found!</h2>;
    }

    return (
    <div className="book-details-container">
        <img src={book.image} alt={book.title} className="book-image" />
        <div className="book-info">
        <h1>{book.title}</h1>
        <p><strong>Category:</strong> {book.category}</p>
        <p><strong>Description:</strong> {book.description}</p>
        <p><strong>Author:</strong>{book.author}</p>
        {/* <p><strong>Ratings:</strong>{book.rating}</p> */}
        <Link to = "/browse">
        <button className="back-button">Back to browse</button>
        </Link>
    </div>
    </div>
);
}

export default BrowseDetailsPage;
