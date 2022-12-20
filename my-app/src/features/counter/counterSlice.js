import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { fetchCount } from './counterAPI';

const initialState = {
  taskList: [],
  status: 'idle',
};

const GET_URL = 'https://svcy.myclass.vn/api/ToDoList/GetAllTask'
const POST_URL = 'https://svcy.myclass.vn/api/ToDoList/AddTask'
const DELETE_URL = 'https://svcy.myclass.vn/api/ToDoList/deleteTask?taskName='
const PUTdone_URL = 'https://svcy.myclass.vn/api/ToDoList/doneTask'
const PUTreject_URL = 'https://svcy.myclass.vn/api/ToDoList/rejectTask'


const sliceName = "counter"
// const taskObject = state.taskList

export const fetchData = createAsyncThunk(`${sliceName}/fetchData`,
  async () => {
    try {
      const response = await axios.get(GET_URL,)
      return response.data
    } catch (error) {
      return error.response.data
    }

  }
)


export const deleteTask = createAsyncThunk(`${sliceName}/deleteTask`, async (taskName) => {
  console.log("hellloo", taskName);
  try {
    const resolve = await axios.delete(`${DELETE_URL}${taskName}`)
    console.log('resolve', resolve);
    // fetchData()
  } catch (error) {
    return error.response.data
  }
})


// export const postData = createAsyncThunk(`${sliceName}/postData`, async () => {
//   try {
//     const response = await axios.post(POST_URL)
//     return response.data
//   } catch (error) {
//     return error.response.data
//   }
// })



// export const changeStatusTask = createAsyncThunk(`${sliceName}/postData`, async () => {
//   try {
//     const response = await axios.post(POST_URL)

//     return response.data
//   } catch (error) {
//     return error.response.data
//   }
// })

export const counterSlice = createSlice({
  name: sliceName,
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },
  },
  extraReducers: (builder) => {
    builder

      .addCase(fetchData.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchData.fulfilled, (state, { payload }) => {
        state.status = 'succeeded';
        state.taskList = payload
      })


  },
});

export const { increment, decrement, incrementByAmount } = counterSlice.actions;


export const selectTodo = (state) => state.counter.taskList;



export default counterSlice.reducer;
