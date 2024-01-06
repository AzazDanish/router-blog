import React from "react";
import { useParams, Link } from "react-router-dom";
import { useContext } from "react";
import DataContext from "./context/DataContext";

const PostPage = () => {
  const { searchResult, posts, handleDelete } = useContext(DataContext);
  const { id } = useParams();
  const post = posts.find((post) => {
    return post.id.toString() === id;
  });

  return (
    <main>
      <article>
        {post && (
          <>
            <h2>{searchResult.title}</h2>
            <p>{searchResult.datetime}</p>
            <p>{searchResult.body}</p>
            <button onClick={() => handleDelete(post.id)}>Delete Post</button>
          </>
        )}
        {!post && (
          <>
            <h2>Post not found</h2>
            <p>well , thats disappointing</p>
            <p>
              <Link to="/">Visit out homepage</Link>
            </p>
          </>
        )}
      </article>
    </main>
  );
};

export default PostPage;
