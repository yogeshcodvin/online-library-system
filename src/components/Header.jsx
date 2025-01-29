
import '../utils/Header.css'
import { NavLink } from "react-router-dom";

function Header() {
return (
    <header>
    <nav>
        <div className="logo">📚 Library</div>
        <div>
        <NavLink to="/" className={({ isActive }) => (isActive ? "active" : "")}>
            Home
        </NavLink>
        <NavLink to="/browse" className={({ isActive }) => (isActive ? "active" : "")}>
            Browse Books
        </NavLink>
        <NavLink to="/add" className={({ isActive }) => (isActive ? "active" : "")}>
            Add Book
        </NavLink>
        </div>
    </nav>
    </header>
);
}

export default Header;