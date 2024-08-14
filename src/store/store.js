import { atom, selector } from 'recoil';

export const Key = atom({
    key: "Key",
    default: 0,
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
});