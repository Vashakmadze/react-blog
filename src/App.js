import logo from './logo.svg';
import './App.css';
import { db } from './firebase/firebase';
import { collection, getDocs, onSnapshot, doc } from "firebase/firestore";
import { useEffect, useState } from 'react';
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import BlogPage from "./components/BlogPage/BlogPage";
import Posts from './components/Posts/Posts';
import { Routes, Route, Navigate } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from "./components/Footer/Footer";

function populateArray(data, keyword) {
  let res = [];
  for(let post of data) {
    if(post.tag === keyword) {
      res.push(post);
    }
  }
  return res;
}

function App() {

  const [posts, SetPosts] = useState([]);
  const [selfcare, setSelfcare] = useState([]);
  const [mind, setMind] = useState([]);
  const [food, setFood] = useState([]);
  const [loginInfo, setLoginInfo] = useState();

  const fetchPost = async () => { 
    await getDocs(collection(db, "posts")).then((querySnapshot)=> {               
      const newData = querySnapshot.docs.map((doc) => ({...doc.data(), id:doc.id }));
      SetPosts(newData);
      setSelfcare(populateArray(newData, "selfcare"));
      setMind(populateArray(newData, "mind"));
      setFood(populateArray(newData, "food"));
    })

    await getDocs(collection(db, "users")).then((querySnapshot)=> {
      const newData = querySnapshot.docs.map((doc) => ({...doc.data(), id:doc.id}));
      setLoginInfo(newData);
    })
  }

  useEffect(()=>{
    fetchPost();
  }, []);

  return (
    <div className="App container">
      <Header />
      <Routes>
        <Route index path='/react-blog/' element={<Home posts={posts}/>}></Route>
        <Route path='/react-blog/login' element={<Login db={db} posts={posts} users={loginInfo}/>}></Route>
        <Route path="*" element={<Navigate to="/react-blog/" replace />} />
        <Route path="/react-blog/:title" element={<BlogPage />}></Route>
        <Route path="/react-blog/food" element={<Posts posts={food}/>}></Route>
        <Route path="/react-blog/mind" element={<Posts posts={mind}/>}></Route>
        <Route path="/react-blog/selfcare" element={<Posts posts={selfcare}/>}></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
