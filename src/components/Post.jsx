// src/components/Post.js
import React, { useState } from 'react';
import { useSetRecoilState } from 'recoil';

import './Post.css'; // Add some basic styling if needed
import { commentsState } from '../store/store';

const Post = () => {
  const [username, setUsername] = useState('');
  const [content, setContent] = useState('');
  const setComments = useSetRecoilState(commentsState);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!username || !content) {
      alert('Both username and comment content are required.');
      return;
    }

    const newComment = {
      id: Date.now(), // Unique ID based on timestamp
      username,
      timestamp: Date.now(),
      content,
      replies: []
    };

    setComments((oldComments) => [...oldComments, newComment]);

    // Clear form fields
    setUsername('');
    setContent('');
  };

  return (
    <div className='post'>
      <h3>Add a New Comment</h3>
      <form onSubmit={handleSubmit}>
        <div className='form-group'>
          <label htmlFor='username'>Username</label>
          <input
            type='text'
            id='username'
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div className='form-group'>
          <label htmlFor='content'>Comment</label>
          <textarea
            id='content'
            value={content}
            onChange={(e) => setContent(e.target.value)}
            required
          ></textarea>
        </div>
        <button type='submit'>Post Comment</button>
      </form>
    </div>
  );
};

export default Post;
