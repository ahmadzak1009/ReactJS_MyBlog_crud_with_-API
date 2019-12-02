import React, { useState, createContext, useEffect } from "react";
import axios from "axios";

export const PostContext = createContext();

export const PostProvider = props => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      axios
        .get("https://jsonplaceholder.typicode.com/posts?_limit=2")
        .then(res => res.data)
        .then(data => setPosts(data), setLoading(true))
        .catch(err => console.log(err));
    }, 3000);
  }, []);

  const deletePost = id => {
    let ask = window.confirm("Are you sure want to delete this post?");

    if (ask) {
      setPosts(posts.filter(post => post.id !== id));
    }
  };

  return <PostContext.Provider value={{ posts, setPosts, deletePost, loading }}>{props.children}</PostContext.Provider>;
};
