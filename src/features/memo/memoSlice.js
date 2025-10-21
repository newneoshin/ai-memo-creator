import { createSlice } from "@reduxjs/toolkit";
import memoRepository from "../../repositories/memoRepository.js";

const initialState = {
  list: memoRepository.getMemos() ?? [],
};

const memoSlice = createSlice({
  name: "memos",
  initialState,
  reducers: {
    addMemo: (state, action) => {
      state.list = [action.payload, ...state.list];
      memoRepository.setMemos(state.list);
    },

    modifyMemo: (state, action) => {
      const filteredMemos = state.list.filter((item) => {
        return item.id != action.payload.id;
      });
      state.list = [...filteredMemos, action.payload];
      memoRepository.setMemos(state.list);
    },

    removeMemo: (state, action) => {
      const mapped = state.list.map((memo) => {
        return memo.id === action.payload.id ? action.payload : memo;
      });
      memoRepository.setMemos(mapped);
    },
    removeAll: (state) => {
      state.list = [];
      memoRepository.removeAll();
    },
  },
});

export const { addMemo, modifyMemo, removeMemo, removeAll } = memoSlice.actions;
export default memoSlice.reducer;
