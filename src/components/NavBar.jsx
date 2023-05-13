import { Link, NavLink } from 'react-router-dom';
import '../styles/Navbar.css';
import { FaUserCircle } from 'react-icons/fa';

const Navbar = () => (
  <nav>
    <div className="navTitle">
      <h1>Bookstore CMS</h1>
      <Link to="/" className="navItems">Books</Link>
      <NavLink to="/Categories" className="navItems">Categories</NavLink>
    </div>
    <p><FaUserCircle /></p>
  </nav>
);

export default Navbar;
