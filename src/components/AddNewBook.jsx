const AddNewBook = () => (
  <>
    <p>Add New Book</p>
    <form>
      <input type="text" placeholder="Book title" />
      <select>
        <option value="Select Author">Select Author</option>
        <option value="author-1">Author 1</option>
        <option value="author-2">Author 2</option>
      </select>
      <button type="submit">Add Book</button>
    </form>
  </>
);

export default AddNewBook;
