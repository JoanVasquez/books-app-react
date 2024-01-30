import { useState } from "react";
import BookEdit from "./BookEdit";

const BookShow = ({ data, id, setData, onEdit, onDelete, bookTitle }) => {
  const [isEdit, setIsEdit] = useState(false);

  return (
    <div className="book-show">
      <img src="https://picsum.photos/seed/8920/300/200" alt="books" />
      <div>
        {isEdit ? (
          <BookEdit
            data={data}
            setData={setData}
            bookTitle={bookTitle}
            id={id}
            setIsEdit={setIsEdit}
          />
        ) : (
          <h3>{bookTitle}</h3>
        )}
      </div>
      <div className="actions">
        <button className="edit" onClick={() => setIsEdit(true)}>
          Edit
        </button>
        <button className="delete" onClick={() => onDelete(id)}>
          Delete
        </button>
      </div>
    </div>
  );
};

export default BookShow;
