import "./index.css";
import { useEffect, useState } from "react";
import { Input } from "./components/Inputs";
import Button from "./components/Button";
import BookList from "./components/BookList";
import axiosUtil from "./utils/axiosUtil";

const endPoint = "http://localhost:3001";

function App() {
  const [data, setData] = useState([]);
  const [title, setTitle] = useState("");

  useEffect(() => {
    (async function () {
      const response = await axiosUtil(
        `${endPoint}/books`,
        "GET",
        null,
        {},
        {}
      );
      setData(response);
    })();
  }, []);

  const onCreate = async (event) => {
    event.preventDefault();
    const tmpBook = {
      bookTitle: title,
    };

    const response = await axiosUtil(
      `${endPoint}/books`,
      "POST",
      tmpBook,
      {},
      {}
    );
    setData((prevData) => [...prevData, response]);
    setTitle("");
  };

  const onDelete = async (id) => {
    await axiosUtil(`${endPoint}/books/${id}`, "DELETE");
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
