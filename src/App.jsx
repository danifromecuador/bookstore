import {
  BrowserRouter, Route, Routes,
} from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar';
import BooksPage from './pages/BooksPage';
import CategoriesPage from './pages/CategoriesPage';

const App = () => (
  <BrowserRouter>
    <NavBar />
    <Routes>
      <Route path="/" element={<BooksPage />} />
      <Route path="Categories" element={<CategoriesPage />} />
      <Route path="*" element={<BooksPage />} />
    </Routes>
  </BrowserRouter>
);

export default App;
