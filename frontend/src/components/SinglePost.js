import { useContext, useEffect, useState } from "react";
import { useLocation } from "react-router";
import axios from "axios";
import { Link } from "react-router-dom";
import { Context } from "../context/Context";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

export default function SinglePost(props) {
  const location = useLocation();
  const path = location.pathname.split("/")[2];
  const [post, setPost] = useState({});
  const PF = "http://localhost:5001/images/";
  const { user } = useContext(Context);
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [updateMode, setUpdateMode] = useState(false);

  useEffect(() => {
    const getPost = async () => {
      const res = await axios.get("/posts/" + path);
      setPost(res.data);
      setTitle(res.data.title);
      setDesc(res.data.desc);
    };
    getPost();
  }, [path]);

  const handleDelete = async () => {
    try {
      await axios.delete(`/posts/${post._id}`, {
        data: { username: user.username },
      });
      window.location.replace("/");
    } catch (error) {}
  };

  const handleUpdate = async () => {
    try {
      await axios.put(`/posts/${post._id}`, {
        username: user.username,
        title,
        desc,
      });
      setUpdateMode(false);
    } catch (err) {}
  };

  const handleDescChange = (e, editor) => {
    const data = editor.getData();
    setDesc(data);
  };

  return (
    <div className="singlePost">
      <div className="singlePostWrapper">
        {post.image && (
          <img className="singlePostImg" src={PF + post.image} alt="" />
        )}
        {updateMode ? (
          <input
            type="text"
            className="singlePostTitleInput"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            autoFocus
          />
        ) : (
          <h1 className="singlePostTitle font-bold text-2xl tracking-tight">
            {title}
            {post.username === user?.username && (
              <div className="singlePostUpdate">
                <EditIcon
                  onClick={() => setUpdateMode(true)}
                  color="secondary"
                />
                <DeleteIcon onClick={handleDelete} color="primary" />
              </div>
            )}
          </h1>
        )}
        <div className="singlePostInfo">
          <span className="singlePostAuthor">
            Author:{" "}
            <Link to={`/?user=${post.username}`} className="link">
              <b>{post.username}</b>
            </Link>
          </span>
          <span className="singlePostDate">
            {new Date(post.createdAt).toDateString()}
          </span>
        </div>
        {updateMode ? (
          <div style={{ width: "70vw" }} className="mx-auto mb-4">
            <CKEditor
              editor={ClassicEditor}
              data={desc}
              onChange={handleDescChange}
            />
          </div>
        ) : (
          // <textarea
          //   className="singlePostDescInput"
          //   value={desc}
          //   onChange={(e) => setDesc(e.target.value)}
          // />
          <p
            className="singlePostDesc"
            dangerouslySetInnerHTML={{ __html: post.desc }}
          ></p>
        )}
        {updateMode && (
          <button className="singlePostButton" onClick={handleUpdate}>
            Update
          </button>
        )}
      </div>
    </div>
  );
}
