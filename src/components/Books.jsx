import Book from './Book';

const Books = () => {
  const list = [
    {
      id: 1,
      title: 'Harry Potter and the Chamber of Secrets',
      author: 'J.K. Rowling',
      image: 'https://images-na.ssl-images-amazon.com/images/I/51Q-88ZL8L._AC_SL1500_.jpg',
    },
    {
      id: 2,
      title: 'Harry Potter and the Prisoner of Azkaban',
      author: 'J.K. Rowling',
      image: 'https://images-na.ssl-images-amazon.com/images/I/51Q-88ZL8L._AC_SL1500_.jpg',
    },
    {
      category: 'Action',
      title: 'The Hunger Games',
      author: 'Suzanne Collins',
      progress: '64%',
      chapter: 'Chapter 17', 
    },
  ];
  return (
    <div>
      <Book
        category={list[0].category}
        title={list[0].title}
        author={list[0].author}
        progress={list[0].progress}
        chapter={list[0].chapter}
      />
    </div>
  );
};

export default Books;
