import Book from './Book';

const Books = () => {
  const BooksArray = [
    {
      id: 1,
      category: 'Action',
      title: 'The Hunger Games',
      author: 'Suzanne Collins',
      progress: '64%',
      chapter: 'Chapter 17',
    },
    {
      id: 2,
      category: 'Fantasy',
      title: 'The Hunger Games',
      author: 'Suzanne Collins',
      progress: '64%',
      chapter: 'Chapter 17',
    },
    {
      id: 3,
      category: 'Fantasy',
      title: 'The Hunger Games',
      author: 'Suzanne Collins',
      progress: '64%',
      chapter: 'Chapter 17',
    },
  ];
  return (
    <div>
      {
        BooksArray.map((item) => (
          <Book
            key={item.id}
            category={item.category}
            title={item.title}
            author={item.author}
            progress={item.progress}
            chapter={item.chapter}
          />
        ))
      }
    </div>
  );
};

export default Books;
