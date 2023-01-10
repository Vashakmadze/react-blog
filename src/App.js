import logo from './logo.svg';
import './App.css';
import { db } from './firebase/firebase';
import { collection, getDocs, onSnapshot, doc } from "firebase/firestore";
import { useEffect, useState } from 'react';
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import { Routes, Route, Navigate } from 'react-router-dom';


function App() {

  const [posts, SetPosts] = useState();

  const fetchPost = async () => { 
    await getDocs(collection(db, "posts")).then((querySnapshot)=> {               
      const newData = querySnapshot.docs.map((doc) => ({...doc.data(), id:doc.id }));
        SetPosts(newData);                
        console.log(posts);
    })
  }

  useEffect(()=>{
      fetchPost();
  }, []);

  return (
    <div className="App container">
      <Routes>
        <Route index path='/home' element={<Home />}></Route>
        <Route path='/login' element={<Login db={db} posts={posts}/>}></Route>
        <Route path="*" element={<Navigate to="/home" replace />} />
      </Routes>
    </div>
  );
}

export default App;
