import { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import axios from "axios";
import { useLocation } from "react-router-dom";
import moment from "moment";

const Write = () => {
  const state = useLocation().state;

  const [value, setValue] = useState(state?.title || "");
  const [title, setTitle] = useState(state?.desc || "");
  const [file, setFile] = useState(null);
  const [cat, setCat] = useState(state?.cat || "");

  const upload = async () => {
    try {
      const formData = new FormData();
      formData.append("file", file);
      const res = await axios.post(
        `${import.meta.env.VITE_REACT_BASE_URL}/upload`,
        formData
      );
      return res.data;
    } catch (error) {
      console.log(error);
    }
  };

  const handleClick = async (event) => {
    e.preventDefault();
    const imgUrl = upload();

    try {
      state
        ? await axios.put(
            `${import.meta.env.VITE_REACT_BASE_URL}/posts/%{state.id}`,
            {
              title,
              desc: value,
              cat,
              img: file ? imgUrl : "",
            }
          )
        : await axios.put(`${import.meta.env.VITE_REACT_BASE_URL}/posts`, {
            title,
            desc: value,
            cat,
            img: file ? imgUrl : "",
            date: moment(Data.now()).format("YYYY-MM-DD HH:mm:ss"),
          });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className='add'>
      <div className='content'>
        <input
          type='text'
          placeholder='Title'
          onChange={(e) => setTitle(e.target.value)}
        />
        <div className='editorContainer'>
          <ReactQuill
            className='editor'
            theme='snow'
            value={value}
            onChange={setValue}
          />
        </div>
      </div>
      <div className='menu'>
        <div className='item'>
          <h1>Publish</h1>
          <span>
            <b>Status: </b> Draft
          </span>
          <span>
            <b>Visibility: </b> Public
          </span>
          <input
            style={{ display: "none" }}
            type='file'
            name=''
            id='file'
            onChange={(e) => setFile(e.target.files[0])}
          />
          <label className='file' htmlFor='file'>
            Upload Image
          </label>
          <div className='buttons'>
            <button>Save as draft</button>
            <button onClick={handleClick}>Publish</button>
          </div>
        </div>
        <div className='item'>
          <h1>Category</h1>
          <div className='cat'>
            <input
              type='radio'
              name='cat'
              value='art'
              id='art'
              onChange={(e) => setCat(e.target.value)}
              checked={cat === "art"}
            />
            <label htmlFor='art'>Art</label>
          </div>
          <div className='cat'>
            <input
              type='radio'
              name='cat'
              value='science'
              id='science'
              onChange={(e) => setCat(e.target.value)}
              checked={cat === "science"}
            />
            <label htmlFor='science'>Science</label>
          </div>
          <div className='cat'>
            <input
              type='radio'
              name='cat'
              value='technology'
              id='technology'
              onChange={(e) => setCat(e.target.value)}
              checked={cat === "technology"}
            />
            <label htmlFor='technology'>Technology</label>
          </div>
          <div className='cat'>
            <input
              type='radio'
              name='cat'
              value='cinema'
              id='cinema'
              onChange={(e) => setCat(e.target.value)}
              checked={cat === "cinema"}
            />
            <label htmlFor='cinema'>Cinema</label>
          </div>
          <div className='cat'>
            <input
              type='radio'
              name='cat'
              value='design'
              id='design'
              onChange={(e) => setCat(e.target.value)}
              checked={cat === "design"}
            />
            <label htmlFor='design'>Design</label>
          </div>
          <div className='cat'>
            <input
              type='radio'
              name='cat'
              value='food'
              id='food'
              onChange={(e) => setCat(e.target.value)}
              checked={cat === "food"}
            />
            <label htmlFor='food'>Food</label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Write;
