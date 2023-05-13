import Book from './Book';

const Books = () => {
  const list = [
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
