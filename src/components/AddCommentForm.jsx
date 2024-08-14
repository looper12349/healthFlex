import React, { useState } from 'react';

const AddCommentForm = ({ onSubmit }) => {
  const [text, setText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(text);
    setText('');
  };

  return (
    <div>
        <form onSubmit={handleSubmit}>
      <input value={text} onChange={e => setText(e.target.value)} placeholder="Add a comment" />
      <button type="submit">Post</button>
    </form>
    </div>
  );
};

export default AddCommentForm;