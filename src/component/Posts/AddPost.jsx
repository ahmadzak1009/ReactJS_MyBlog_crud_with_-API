import React, { useContext, useState } from "react";
import { PostContext } from "../../PostContext";

const AddPost = props => {
  const { posts, setPosts } = useContext(PostContext);

  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const addPost = e => {
    e.preventDefault();

    setPosts([...posts, { title: title, body: body }]);

    props.history.push("/");
  };

  return (
    <div className="container mt-5">
      <form onSubmit={addPost}>
        <div className="row form-group">
          <label className="col-sm-2 col-form-label">Title</label>
          <div className="col-sm-6">
            <input type="text" className="form-control" name="title" value={title} onChange={e => setTitle(e.target.value)} />
          </div>
        </div>
        <div className="form-group row">
          <label className="col-sm-2 col-form-label">Content</label>
          <div className="col-sm-6">
            <textarea name="body" cols="30" rows="10" className="form-control" value={body} onChange={e => setBody(e.target.value)}></textarea>
          </div>
        </div>
        <div className="form-group row">
          <div className="col-sm-8">
            <button type="submit" className="btn btn-primary float-right">
              Submit
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddPost;
