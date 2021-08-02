import React, { useState, useEffect } from "react";
import Posts from "./Posts";
import Pagination from "./Pagination";
import axios from "axios";

/**
 * 최종 페이징 컴포넌트
 * @author 주민지
 */

export default function Page () {
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
      <Posts posts={currentPosts} loading={loading} />
      <Pagination
        postsPerPage={postsPerPage}
        totalPosts={posts.length}
        paginate={paginate}
      />
    </div>
  );
};
