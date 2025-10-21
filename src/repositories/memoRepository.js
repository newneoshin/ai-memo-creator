import localStorageManager from "../shared/utils/localStorageManager.js";

const memoRepository = {
  getMemos: () => {
    const memos = localStorageManager.getItem("memos");
    if (!memos) {
      return [];
    }
    return memos;
  },

  setMemos: (memos) => {
    localStorageManager.setItem("memos", memos);
  },

  removeAll: () => {
    localStorageManager.removeItem("memos");
  },
};

export default memoRepository;
