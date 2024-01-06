import { useState, useEffect, createContext } from "react";
import api from "../api/posts";

import { useNavigate } from "react-router-dom";
import { format } from "date-fns";

const DataContext = createContext({});

export const DataProvider = ({ children }) => {
  const [posts, setPosts] = useState([]);
  const [search, setSearch] = useState("");
  const [searchResult, setSearchResult] = useState([]);
  const [postTitle, setPostTitle] = useState("");
  const [postBody, setPostBody] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await api.get("/posts");
        setPosts(response.data);
        console.log(response.data);
      } catch (err) {
        if (err.response) {
          console.log(err.response.data);
          console.log(err.response.status);
          console.log(err.response.headers);
        }
      }
    };

    (() => fetchPosts())();
  }, []);

  useEffect(() => {
    const filteredItem = posts.filter((post) => {
      return (
        post.body.toLowerCase().includes(search.toLowerCase()) ||
        post.title.toLowerCase().includes(search.toLowerCase())
      );
    });
    setSearchResult(filteredItem.reverse());
  }, [posts, search]);

  const handleDelete = async (id) => {
    try {
      await api.delete(`/posts/${id}`);
      const postList = posts.filter((post) => {
        return post.id !== id;
      });
      console.log(postList);
      setPosts(postList);
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const id = posts.length ? posts[posts.length - 1].id + 1 : 1;
    const datetime = format(new Date(), "MMMM , dd , yyyy , pp");
    const newPost = {
      id: id,
      title: postTitle,
      datetime: datetime,
      body: postBody,
    };
    try {
      const response = await api.post("/posts", newPost);
      const allPosts = [...posts, response.data];
      setPosts(allPosts);
      setPostBody("");
      setPostBody("");
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <DataContext.Provider
      value={{
        search,
        setSearch,
        searchResult,
        posts,
        postBody,
        postTitle,
        setPostBody,
        setPostTitle,
        handleSubmit,
        posts,
        handleDelete,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export default DataContext;
