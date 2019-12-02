import React, { useContext } from "react";
import { PostContext } from "../PostContext";
import Post from "./Posts/Post";
import Loading from "./Loading";

const Home = props => {
  const value = useContext(PostContext);

  return (
    <div>
      <div className="container">
        <div className="row">{value.loading ? value.posts.map(post => <Post key={post.id} post={post} deletePost={value.deletePost} />) : <Loading />}</div>
      </div>
    </div>
  );
};

export default Home;
