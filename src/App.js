import {
  BrowserRouter, Navigate, Route, Routes,
} from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar';
import Books from './routes/Books';
import Categories from './routes/Categories';

function App() {
  return (
    <BrowserRouter>
      <NavBar />

      <Routes>
        <Route path="Books" element={<Books />} />
        <Route path="Categories" element={<Categories />} />
        <Route path="/" element={<Navigate to="/Books" />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
