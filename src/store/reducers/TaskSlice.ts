import { ITask } from "@/types/types";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface TaskState {
  tasks: ITask[]
  sort: string
}

const initialState: TaskState = {
  tasks: [],
  sort: 'default',
}

export const taskSlice = createSlice({
  name: 'task',
  initialState,
  reducers: {

    addTask(state, action: PayloadAction<ITask>) {
      state.tasks.push(action.payload)
    },

    removeTask(state, action: PayloadAction<number>) {
      const arr = state.tasks.filter(el => el.id !== action.payload)
      state.tasks = arr
    },

    completedTask(state, action: PayloadAction<number>) {
      state.tasks.map(task => {
        if (task.id === action.payload) {
          task.done = !task.done
        }
      })
    },

    changeSort(state, action: PayloadAction<string>) {
      state.sort = action.payload
    },

  }
})

export default taskSlice.reducer