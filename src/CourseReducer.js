import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

// import courseJson from "../courses.json";

export const fetchData = createAsyncThunk("fetchCoursesDetails", async () => {
  const response = await axios.get("http://localhost:3000/courses");
  return response.data;
});

const courseSlice = createSlice({
  name: "courseSlice",
  initialState: {
    loading: false,
    error: null,
    data: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchData.pending, (state) => {
        state.loading = true;
        state.error = null;
      })

      .addCase(fetchData.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })

      .addCase(fetchData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default courseSlice.reducer;
