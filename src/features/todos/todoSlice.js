import { createSlice } from "@reduxjs/toolkit";
import memoRepository from "../../repositories/memoRepository.js";

const initialState = {
  memos: memoRepository.getMemos() ?? [],
};

const memosSlice = createSlice({
  name: "memos",
  initialState,
  reducers: {
    addMemo: (state, action) => {
      state.memos = [action.payload, ...state.memos];
      memoRepository.setMemos(state.memos);
    },

    modifyMemo: (state, action) => {
      const filteredMemos = state.memos.filter((item) => {
        return item.id != action.payload.id;
      });
      state.memos = [...filteredMemos, action.payload];
      memoRepository.setMemos(state.memos);
    },

    removeMemo: (state, action) => {
      const mapped = state.memos.map((memo) => {
        return memo.id === action.payload.id ? action.payload : memo;
      });
      memoRepository.setMemos(filteredMemos);
    },
    removeAll: (state) => {
      state.memos = [];
      memoRepository.removeAll();
    },
  },
});

export const { addMemo, modifyMemo, removeMemo, removeAll } =
  memosSlice.actions;
export default memosSlice.reducer;
