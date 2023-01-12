import React, { useState, useEffect } from 'react';
import './Login.css';
import { useQuill } from 'react-quilljs';
import 'react-quill/dist/quill.snow.css'
import 'quill/dist/quill.bubble.css'; // Add css for bubble theme
import { addDoc, doc, deleteDoc, collection, updateDoc } from "firebase/firestore"; 

function submit(tag, value, db, title, image) {
  const inputRef = collection(db, "posts");
  const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  let today = new Date().toLocaleDateString("en-US", options);
  addDoc(inputRef, {
      html: value,
      tag: tag,
      title: title,
      image: image,
      date: today,
      featured: false
  });
  alert("Entire Document titled " + title + " has been added successfully.")
}

function deletePost(id, db, title) {
  const docRef = doc(db, "posts", id);
  deleteDoc(docRef)
  .then(() => {
      alert("Entire Document titled " + title + " has been deleted successfully.")
  })
  .catch(error => {
      console.log(error); 
  })
}
 
function featurePost(id, db, title, posts) {
  for(const post of posts) {
    if(post.id === id ) {
      let docRef = doc(db, "posts", id);
      updateDoc(docRef, {
        featured: true  
      }).then(() => {
        alert("Entire Document titled " + title + " has been featured successfully.")
      });    
    } else {
      let docRef = doc(db, "posts", post.id);
      updateDoc(docRef, {
        featured: false  
      })
    }
  }

}

function imageHandler(quill) {
  let range = quill.getSelection();
  let value = prompt("Enter image link here: ");
  if(value) {
    quill.insertEmbed(range.index, "image", value);
  }
}

function Login(props) {

  const { quill, quillRef } = useQuill();
  const [ value, setValue ] = useState(); 
  const [ tag, setTag ] = useState();
  const [ title, setTitle] = useState();
  const [ image, setImage] = useState();
 
  useEffect(() => {
    if (quill) {
      quill.getModule('toolbar').addHandler('image', () => imageHandler(quill));
      quill.on('text-change', () => {
        setValue(quillRef.current.firstChild.innerHTML)
      });
    }
  }, [quill]);

  return (
    <div className="Login">
      <div className='titleText'>
        <label>
          Enter title for your post here: <br/>
          <input type="text" value={title} name="title" onChange={(e) => setTitle(e.target.value)} />
        </label>
      </div>
      <div className='cover'>
        <label>
          Enter cover image url your post here: <br/>
          <input type="text" value={image} name="image" onChange={(e) => setImage(e.target.value)} />
        </label>
      </div>
      <div className='editor' ref={quillRef} />
      <div className='tags' onChange={(e) => setTag(e.target.value)}>
        <h3 className='label-tags'>Choose tags for the blog: </h3><br/>
        <label>
          <input type="radio" value="food" name="tag" />
          Food
        </label>
        <label>
          <input type="radio" value="mind" name="tag" /> 
          Mind
        </label>
        <label>
          <input type="radio" value="selfcare" name="tag" /> 
          Selfcare
        </label>
      </div>
      <button className="button-55" onClick={() => submit(tag, value, props.db, title, image)}>Submit</button>
      <div className='posts'>
        <h1>Manage your posts from here</h1>
        {
          props.posts !== undefined && 
            props.posts.map((item) => {
              return (
                <div className='post' key={item.id}>
                  <h3 className='tag'>{item.title}</h3>
                  <div className='delete' onClick={() => deletePost(item.id, props.db, item.title)}>Delete</div>
                  <div className='featured' onClick={() => featurePost(item.id, props.db, item.title, props.posts)}>Feature Post</div> 
                </div>
              );
            })
        }
      </div>
    </div>
  )
};

Login.propTypes = {};

Login.defaultProps = {};

export default Login;
