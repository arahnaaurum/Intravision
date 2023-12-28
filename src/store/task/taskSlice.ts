import { RootState } from '..';
import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit';
import { Priority, Status, Task, User } from '../../types/types'; 
import { getExecutors, getPriorities, getStatuses, getTaskById, getTasksData } from './taskAPI';

type TaskState = {
  priorityList: Priority [];
  statusList: Status[];
  executorList: User[];
  taskList: Task[];
  currentTask?: Task;
  createdTaskId?: number;
}

export const initialState: TaskState = {
  priorityList: [],
  statusList: [],
  taskList: [],
  executorList: [],
  currentTask: undefined,
};

export const getPrioritiesWithThunk = createAsyncThunk(
  'task/getPriorities',
  async () => {
    const response = await getPriorities();
    return response;
  }
);

export const getStatusesWithThunk = createAsyncThunk(
  'task/getStatuses',
  async () => {
    const response = await getStatuses();
    return response;
  }
);

export const getExecutorsWithThunk = createAsyncThunk(
  'task/getExecutors',
  async () => {
    const response = await getExecutors();
    return response;
  }
);

export const getTasksDataWithThunk = createAsyncThunk(
  'task/getTasksData',
  async () => {
    const response = await getTasksData();
    return response;
  }
);

export const getCurrentTaskWithThunk = createAsyncThunk(
  'task/getCurrentTask',
  async (id: number) => {
    const response = await getTaskById(id);
    return response;
  }
);

export const taskSlice = createSlice({
  name: "task",
  initialState,

  reducers: {},

  extraReducers: (builder) => {
    builder
      .addCase(
        getPrioritiesWithThunk.fulfilled,
        (
          state: TaskState,
          action: PayloadAction<Priority[] | undefined>
        ) => {
          if (action.payload) {
            state.priorityList = [...action.payload];
          }
        }
      )
      .addCase(
        getStatusesWithThunk.fulfilled,
        (
          state: TaskState,
          action: PayloadAction<Status[] | undefined>
        ) => {
          if (action.payload) {
            state.statusList = [...action.payload];
          }
        }
      )
      .addCase(
        getExecutorsWithThunk.fulfilled,
        (
          state: TaskState,
          action: PayloadAction<User[] | undefined>
        ) => {
          if (action.payload) {
            state.executorList = [...action.payload];
          }
        }
      )
      .addCase(
        getTasksDataWithThunk.fulfilled,
        (
          state: TaskState,
          action: PayloadAction<Task[] | undefined>
        ) => {
          if (action.payload) {
            state.taskList = [...action.payload];
          }
        }
      )
      .addCase(
        getCurrentTaskWithThunk.fulfilled,
        (
          state: TaskState,
          action: PayloadAction<Task | undefined>
        ) => {
          if (action.payload) {
            state.currentTask = action.payload;
          }
        }
      )
  },
});

export default taskSlice.reducer;

export const selectPriorities = (state: RootState) => state.task.priorityList;
export const selectStatuses = (state: RootState) => state.task.statusList;
export const selectExecutors = (state: RootState) => state.task.executorList;
export const selectTasks = (state: RootState) => state.task.taskList;
export const selectCurrentTask = (state: RootState) => state.task.currentTask;