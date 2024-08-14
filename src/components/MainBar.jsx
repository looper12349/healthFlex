import React, { useCallback } from 'react';
import { useRecoilValue, useSetRecoilState } from 'recoil';

import Comment from './Comment';
import { commentsState, filteredAndSortedCommentsState } from '../store/store';

const MainBar = () => {
  const filteredAndSortedComments = useRecoilValue(filteredAndSortedCommentsState);
  const comments = useRecoilValue(commentsState);
  const setComments = useSetRecoilState(commentsState);

  const handleEditComment = useCallback((id, newText) => {
    setComments((oldComments) =>
      oldComments.map(comment =>
        comment.id === id ? { ...comment, content: newText } : comment
      )
    );
  }, [setComments]);

  const handleDeleteComment = useCallback((id) => {
    setComments((oldComments) =>
      oldComments.filter(comment => comment.id !== id)
    );
  }, [setComments]);

  const handleAddReply = useCallback((commentId, reply) => {
    const replyVal = {
      id: Date.now(),
      username: 'User1',
      timestamp: Date.now(),
      content: reply
    }
    setComments((oldComments) =>
      oldComments.map(comment =>
        comment.id === commentId
          ? { ...comment, replies: [...comment.replies, replyVal] }
          : comment
      )
    );
  }, [setComments]);

  const handleEditReply = useCallback((commentId, replyId, newText) => {
    setComments((oldComments) =>
      oldComments.map(comment =>
        comment.id === commentId
          ? {
              ...comment,
              replies: comment.replies.map(reply =>
                reply.id === replyId ? { ...reply, content: newText } : reply
              )
            }
          : comment
      )
    );
  }, [setComments]);

  const handleDeleteReply = useCallback((commentId, replyId) => {
    setComments((oldComments) =>
      oldComments.map(comment =>
        comment.id === commentId
          ? {
              ...comment,
              replies: comment.replies.filter(reply => reply.id !== replyId)
            }
          : comment
      )
    );
  }, [setComments]);

  return (
    <div className='mainBar'>
      <h1>My Comments:</h1>

     {filteredAndSortedComments.map(comment => (
        <Comment
          key={comment.id}
          comment={comment}
          onEditComment={handleEditComment}
          onDeleteComment={handleDeleteComment}
          onEditReply={handleEditReply}
          onReplyComment={handleAddReply}
          onDeleteReply={handleDeleteReply}
        />
      ))}
    </div>
  );
};

export default React.memo(MainBar);