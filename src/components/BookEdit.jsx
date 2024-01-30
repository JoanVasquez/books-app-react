import { useState } from "react";
import { Input } from "./Inputs";
import Button from "./Button";
import axios from "axios";

const BookEdit = ({ data, setData, setIsEdit, id, bookTitle }) => {
  const [title, setTitle] = useState(bookTitle);

  const onEdit = async () => {
    await axios.put(`http://localhost:3001/books/${id}`, {
      bookTitle: title,
    });

    const newData = data.filter((item) => {
      if (item.id === id) {
        item.bookTitle = title;
        return item;
      } else {
        return item;
      }
    });

    setData(newData);
    setIsEdit(false);
  };

  return (
    <div className="book-edit">
      <label htmlFor="edit-title">
        <Input
          value={title}
          setValue={setTitle}
          name="title"
          label="title"
          type="text"
        />
      </label>
      <Button onClick={onEdit} className="button is-primary" text="Save" />
    </div>
  );
};

export default BookEdit;
