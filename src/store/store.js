import { atom, selector, DefaultValue } from 'recoil';
import { recoilPersist } from 'recoil-persist';

export const Key = atom({
    key: "Key",
    default: 0,
});

const { persistAtom } = recoilPersist({
    key: 'recoil-persist',
    storage: localStorage,
  });
  

export const commentsState = atom({
  key: 'commentsState',
  default: [
    {
      id: 1,
      username: 'User1',
      timestamp: Date.now(),
      content: 'This is the first comment.',
      replies: [
        {
          id: 2,
          username: 'User2',
          timestamp: Date.now() + 1000,
          content: 'This is a reply to the first comment.',
        },
        {
            id: 3,
            username: 'User2',
            timestamp: Date.now() + 1000,
            content: 'This is a reply to the first comment.',
          },
      ],
    },
    {
      id: 3,
      username: 'User3',
      timestamp: Date.now() + 2000,
      content: 'This is the second comment.',
      replies: [],
    },
  ],
  effects_UNSTABLE: [persistAtom],
});

export const searchQueryState = atom({
    key: 'searchQueryState',
    default: '',
  });
  
  export const sortOrderState = atom({
    key: 'sortOrderState',
    default: 'new', // 'new' or 'old'
  });
  
  export const filteredAndSortedCommentsState = selector({
    key: 'filteredAndSortedCommentsState',
    get: ({get}) => {
      const comments = get(commentsState);
      const searchQuery = get(searchQueryState).toLowerCase();
      const sortOrder = get(sortOrderState);
  
      let filteredComments = comments.filter(comment => 
        comment.content.toLowerCase().includes(searchQuery) ||
        comment.username.toLowerCase().includes(searchQuery)
      );
  
      return filteredComments.sort((a, b) => 
        sortOrder === 'new' ? b.timestamp - a.timestamp : a.timestamp - b.timestamp
      );
    },
  });