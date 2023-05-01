import { configureStore, createSlice } from "@reduxjs/toolkit";

const initialState = {
  // blogId : 0,npm
  title: '',
  category: '',
  description: '',
};

const blogSlice = createSlice({
  name: "blogData",
  initialState,
  reducers: {
    setTitle: (state, action) => {
      state.title = action.payload;
    },
    setCategory: (state, action) => {
      state.category = action.payload;
    },
    setDescription: (state, action) => {
      state.description = action.payload;
    },
    resetForm: (state) => {
      state.title = "";
      state.category = "";
      state.description = "";
    },

    setBlog(state, action) {
      state.blogTitle = action.payload.ti;
      return action.payload;
    },
  },
});

const store = configureStore({
  reducer: { blog: blogSlice.reducer },
});

export const { setTitle, setCategory,setDescription,  } = blogSlice.actions;

export default store;
