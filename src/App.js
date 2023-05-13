import {
  BrowserRouter, Route, Routes,
} from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar';
import BooksPage from './routes/BooksPage';
import Categories from './routes/Categories';

function App() {
  return (
    <BrowserRouter>
      <NavBar />

      <Routes>
        <Route path="/" element={<BooksPage />} />
        <Route path="/Books" element={<BooksPage />} />
        <Route path="Categories" element={<Categories />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
