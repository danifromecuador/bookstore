import {
  BrowserRouter, Route, Routes,
} from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar';
import BooksPage from './pages/BooksPage';
import Categories from './pages/Categories';

function App() {
  return (
    <BrowserRouter>
      <NavBar />

      <Routes>
        <Route path="/" element={<BooksPage />} />
        <Route path="Categories" element={<Categories />} />
        <Route path="*" element={<BooksPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
