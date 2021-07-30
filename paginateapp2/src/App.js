import React, { useState, useEffect } from "react";
import Posts from "./components/Posts";
import Pagination from "./components/Pagination";
import Navigator from "./components/Navigator";
import axios from "axios";
import "./App.css";

const App = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(8);

  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      const res = await axios.get("https://jsonplaceholder.typicode.com/posts");
      setPosts(res.data);
      setLoading(false);
    };

    fetchPosts();
  }, []);

  //Get current posts
  const indexOfLastPost = currentPage * postsPerPage;
  const indexFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexFirstPost, indexOfLastPost);

  console.log(posts);

  // Change page
  const paginate = (pageNumber) =>setCurrentPage(pageNumber);

  return (
    <div className="container mt-5">
      {" "}
      {/* className은 단순히 클래스 명이다 */}
      <Navigator />
      <h1 className="text-primary mb-3">My Blog</h1>
      <Posts posts={currentPosts} loading={loading} />
      <Pagination
        postsPerPage={postsPerPage}
        totalPosts={posts.length}
        paginate={paginate}
      />
    </div>
  );
};

export default App;
