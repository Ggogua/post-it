import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Header from "../components/Header";
import Account from "../pages/Account";
import Profile from "../pages/Profile";
import Posts from "../pages/Posts";
import Videos from "../pages/Videos";
import News from "../pages/News";
import Saved from "../pages/Saved";
import Create from "../pages/Create";
import Myposts from "./Myposts";
import Settings from "../pages/Settings";
import MyAccount from "../pages/MyAccount";

const App = () => {
  const [savedPosts, setSavedPosts] = useState([]);
  const [myPosts, setMyPosts] = useState([]);

  const handleSavePost = (post) => {
    if (!savedPosts.some((p) => p.id === post.id)) {
      setSavedPosts([...savedPosts, post]);
    } else {
      alert("Post already saved!");
    }
  };

  const mySavePost = (mypost) => {
    setMyPosts([...myPosts, mypost]);
    alert("Post saved!");
  };

  return (
    <div>
      <Routes>
        <Route path="/" element={<Header />} />
        <Route path="/account" element={<Account />} />
        <Route path="/profile" element={<Profile />} />
        <Route
          path="/posts"
          element={
            <Posts onSavePost={handleSavePost} savedPosts={savedPosts} />
          }
        />
        <Route path="/videos" element={<Videos />} />
        <Route path="/news" element={<News />} />
        <Route
          path="/saved"
          element={
            <Saved savedPosts={savedPosts} onSavePost={handleSavePost} />
          }
        />
        <Route path="/create" element={<Create onSavePost={mySavePost} />} />
        <Route path="/myposts" element={<Myposts savedPosts={myPosts} />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/myaccount" element={<MyAccount />} />
      </Routes>
    </div>
  );
};

export default App;
