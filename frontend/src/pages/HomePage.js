import React, { useEffect, useState } from "react";
import Posts from "../components/Posts";
import SideBar from "../components/SideBar";
import { useLocation } from "react-router";
import axios from "axios";

const Homepage = () => {
  const [posts, setPosts] = useState([]);
  const { search } = useLocation();

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await axios.get("/posts" + search);
      setPosts(res.data);
    };
    fetchPosts();
  }, [search]);
  return (
    <section className="bg-white px-20 py-10">
      <div class="flex">
        <Posts posts={posts} />
        <SideBar />
      </div>
    </section>
  );
};
export default Homepage;
