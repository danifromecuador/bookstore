import BookItem from './BookItem';

const RenderList = () => {
  const list = [
    {
      category: 'Science Fiction',
      title: 'Dune',
      author: 'Frank Herbert',
      progress: '65%',
      chapter: 'Chapter 9',
    },
  ];

  const {
    category, title, author, progress, chapter,
  } = list[0];

  return (
    <div>
      <BookItem
        category={category}
        title={title}
        author={author}
        progress={progress}
        chapter={chapter}
      />
    </div>
  );
};

export default RenderList;
