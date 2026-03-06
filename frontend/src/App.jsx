import { useEffect, useState } from "react";
import "./App.css";
import { getAllPosts } from "./api/api";
import Header from "./components/Header";
import PostsList from "./components/PostsList";
import Footer from "./components/Footer";

function App() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const loadAllPosts = async () => {
      const data = await getAllPosts();
      setPosts(data);
    };
    loadAllPosts();
  }, []);

  return (
    <div className="w-full min-h-screen flex flex-col">
      <Header />
      <PostsList posts={posts}/>
      <Footer/>
    </div>
  );
}

export default App;
