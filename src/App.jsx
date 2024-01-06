import Header from "./Header";
import Footer from "./Footer";
import Nav from "./Nav";
import Home from "./Home";
import NewPost from "./NewPost";
import PostPage from "./PostPage";
import About from "./About";
import Missing from "./Missing";

import { Route, Routes } from "react-router-dom";

import { DataProvider } from "./context/DataContext";

function App() {
  return (
    <DataProvider>
      <div className="App">
        <Header title="React JS blog" />
        <Nav />
        <Routes>
          <Route index element={<Home />} />

          <Route path="post" element={<NewPost />} />
          <Route path="/post/:id" element={<PostPage />} />

          <Route path="about" element={<About />} />
          <Route path="*" element={<Missing />} />
        </Routes>
        <Footer />
      </div>
    </DataProvider>
  );
}

export default App;
