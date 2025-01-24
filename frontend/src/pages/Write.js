import { useContext, useState } from "react";
import axios from "axios";
import { Context } from "../context/Context";
import AddIcon from "@mui/icons-material/Add";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

export default function Write() {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [file, setFile] = useState(null);
  const { user } = useContext(Context);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newPost = { username: user.username, title, desc };
    if (file) {
      const data = new FormData();
      const filename = Date.now() + file.name;
      data.append("name", filename);
      data.append("file", file);
      newPost.image = filename;
      try {
        await axios.post("/upload", data);
      } catch (error) {}
    }
    try {
      const res = await axios.post("/posts", newPost);
      window.location.replace("/home/");
    } catch (error) {}
  };

  const handleDescChange = (e, editor) => {
    const data = editor.getData();
    setDesc(data);
  };

  return (
    <div className="write">
      {file && (
        <img className="addImg" src={URL.createObjectURL(file)} alt="" />
      )}
      <form className="writeForm" onSubmit={handleSubmit}>
        <div className="writeFormGroup">
          <label htmlFor="fileInput">
            <AddIcon />
            {/* <i className="writeIcon fas fa-plus"></i> */}
          </label>
          <input
            type="file"
            id="fileInput"
            style={{ display: "none" }}
            onChange={(e) => setFile(e.target.files[0])}
          />
          <input
            type="text"
            placeholder="Title"
            className="postInput"
            autoFocus={true}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div style={{ width: "70vw" }} className="mx-auto mb-4">
          <CKEditor
            editor={ClassicEditor}
            data={desc}
            onChange={handleDescChange}
          />
          {/* <textarea
            placeholder="Tell your story..."
            type="text"
            className="postInput postText"
            onChange={(e) => setDesc(e.target.value)}
          ></textarea> */}
        </div>
        <button className="postSubmit" type="submit">
          Publish
        </button>
      </form>
    </div>
  );
}
