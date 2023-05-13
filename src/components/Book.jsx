import PropTypes from 'prop-types';
import '../styles/BookItem.css';

const Book = (
  {
    category,
    title,
    author,
    progress,
    chapter,
  },
) => (
  <>
    <div className="bookContainer">
      <div>
        <p>{category}</p>
        <p>{title}</p>
        <p>{author}</p>
        <button type="button">Comments</button>
        <button type="button">Remove</button>
        <button type="button">Edit</button>
      </div>
      <p>{progress}</p>
      <div>
        <p>{chapter}</p>
        <button type="button">Update Progress</button>
      </div>
    </div>
  </>

);

Book.propTypes = {
  category: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  chapter: PropTypes.string.isRequired,
  progress: PropTypes.string.isRequired,
};

export default Book;
