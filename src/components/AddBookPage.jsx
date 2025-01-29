import { useState } from "react";
import { useDispatch } from "react-redux";
import { addBook } from "../utils/appSlice";
import { useNavigate } from "react-router-dom";
import "../utils/AddBookPage.css"; 

function AddBookPage() {
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [image, setImage] = useState("");
  const [description, setDescription] = useState("");
  const [error, setError] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validation
    if (!title.trim() || !category.trim() || !image.trim() || !description.trim()) {
        setError("All fields are required!");
        return;
      }
      

    // Create new book object
    const newBook = {
      id: Date.now(),
      title,
      category,
      image,
      description,
    };

    // Dispatch action to Redux store
    dispatch(addBook(newBook));

    // Redirect to Browse Books page
    navigate("/browse");
  };

  return (
    <div className="add-book-container">
      <h1>Add a New Book</h1>
      {error && <p className="error">{error}</p>}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Book Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          type="text"
          placeholder="Category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        />
        <input
          type="text"
          placeholder="Image URL"
          value={image}
          onChange={(e) => setImage(e.target.value)}
        />
        <textarea
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        ></textarea>
        <button type="submit">Add Book</button>
      </form>
    </div>
  );
}

export default AddBookPage;
