import BookShow from "./BookShow";

const BookList = ({ data, setData, onDelete, bookTitle }) => (
  <div className="book-list">
    {data.map((item) => (
      <BookShow
        data={data}
        setData={setData}
        key={item.id}
        id={item.id}
        onDelete={onDelete}
        bookTitle={item.bookTitle}
      />
    ))}
  </div>
);

export default BookList;
