import "./index.css";
import { useEffect, useState } from "react";
import { Input } from "./components/Inputs";
import Button from "./components/Button";
import BookList from "./components/BookList";
import axios from "axios";

function App() {
  const [data, setData] = useState([]);
  const [title, setTitle] = useState("");

  useEffect(() => {
    (async function () {
      const response = await axios.get("http://localhost:3001/books");
      setData(response.data);
    })();
  }, []);

  const onCreate = async (event) => {
    event.preventDefault();
    const tmpBook = {
      bookTitle: title,
    };

    const response = await axios.post("http://localhost:3001/books", tmpBook);
    setData((prevData) => [...prevData, response.data]);
    setTitle("");
  };

  const onDelete = async (id) => {
    await axios.delete(`http://localhost:3001/books/${id}`);
    const newData = data.filter((item) => item.id !== id);
    setData(newData);
  };

  return (
    <div className="app">
      {data.length > 0 && <h1>Reading List</h1>}

      {data.length > 0 && (
        <BookList data={data} setData={setData} onDelete={onDelete} />
      )}

      <div className="book-create">
        <form>
          <h3>Add a Book</h3>
          <Input
            value={title}
            setValue={setTitle}
            name="title"
            label="title"
            type="text"
          />
          <Button className="button" text="Create!" onClick={onCreate} />
        </form>
      </div>
    </div>
  );
}

export default App;
