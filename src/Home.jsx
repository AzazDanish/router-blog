import React from "react";
import Feed from "./Feed";
import { useContext } from "react";
import DataContext from "./context/DataContext";

const Home = () => {
  const { posts } = useContext(DataContext);
  return (
    <main>
      {posts.length ? <Feed posts={posts} /> : <p>No posts to display</p>}
    </main>
  );
};

export default Home;
