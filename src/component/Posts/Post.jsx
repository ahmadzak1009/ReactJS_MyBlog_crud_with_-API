import React from "react";
import { Link } from "react-router-dom";

const Post = props => {
  return (
    <div className="col-md-6 p-3">
      <div className="row">
        <div className="col-md-4">
          <img src={require("../../img/post-1.jpg")} alt="post" className="img-fluid" />
        </div>
        <div className="col-md-8">
          <Link to={"/post/" + props.post.id} className="text-decoration-none">
            <h5>{props.post.title}</h5>
          </Link>
          <p>{props.post.body}</p>
          <button className="btn btn-danger btn-sm mr-2" onClick={() => props.deletePost(props.post.id)}>
            Delete
          </button>
          <Link to={"/edit/" + props.post.id}>
            <button className="btn btn-info btn-sm">Edit</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Post;
