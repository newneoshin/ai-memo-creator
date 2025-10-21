import { createSlice } from "@reduxjs/toolkit";
import memoRepository from "../../repositories/memoRepository.js";

const initialState = {
  list: memoRepository.getMemos() ?? [],
};

const memoSlice = createSlice({
  name: "memo",
  initialState,
  reducers: {
    addMemo: (state, action) => {
      state.list = [action.payload, ...state.list];
      memoRepository.setMemos(state.list);
    },

    modifyMemo: (state, action) => {
      const mapped = state.list.map((item) => {
        return item.id !== action.payload.id ? item : action.payload;
      });
      state.list = mapped;
      memoRepository.setMemos(mapped);
    },

    removeMemo: (state, action) => {
      const filtered = state.list.filter((memo) => {
        return memo.id === action.payload.id;
      });
      state.list = filtered;
      memoRepository.setMemos(filtered);
    },

    removeAll: (state) => {
      state.list = [];
      memoRepository.removeAll();
    },
  },
});

export const { addMemo, modifyMemo, removeMemo, removeAll } = memoSlice.actions;
export default memoSlice.reducer;
