import React from "react";
import { useContext } from "react";
import DataContext from "./context/DataContext";

const NewPost = () => {
  const { postBody, postTitle, setPostBody, setPostTitle, handleSubmit } =
    useContext(DataContext);
  return (
    <main>
      <h2>Post new item</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="postTitle">Post Title</label>
        <input
          id="postTitle"
          type="text"
          required
          value={postTitle}
          onChange={(e) => {
            setPostTitle(e.target.value);
          }}
        />
        <label htmlFor="setPost">Post Body</label>
        <textarea
          id="setPost"
          required
          value={postBody}
          onChange={(e) => {
            setPostBody(e.target.value);
          }}
        />
        <button>Add new post</button>
      </form>
    </main>
  );
};

export default NewPost;
