import { Link } from 'react-router-dom';
import '../styles/NavBar.css';

const NavBar = () => (
  <nav className="navContainer">
    <h1>Bookstore CMS</h1>
    <Link to="/Books" className="navLinks">BOOKS</Link>
    <Link to="/Categories" className="navLinks">CATEGORIES</Link>
  </nav>
);

export default NavBar;
