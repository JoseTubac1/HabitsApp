import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fecthHabits } from "./habitAPI";

type Habit = {
  _id: string;
  title: string;
  description: string;
  createdAt: string;
}

type HabitState = {
  habits: Habit[];
}  

const initialState: HabitState = {
    habits: []
    }

export const fetchHabitsThunk = createAsyncThunk("habit/fetchHabits",async () => {
    return await fecthHabits();
});
const habitSlice = createSlice({
  name: "habit",
    initialState,
    reducers: {
        addHabits: (state, action) => {
            state.habits = action.payload;
        },
        addHabit: (state, action) => {
            state.habits.push(action.payload);
        },
        removeHabit: (state, action) => {
            state.habits = state.habits.filter(habit => habit._id !== action.payload);
        }
    },
    extraReducers: (builder) => {
        builder.addCase(fetchHabitsThunk.fulfilled, (state, action) => {
            state.habits = action.payload;
        });
    }
});

export const { addHabits, addHabit, removeHabit } = habitSlice.actions;
export default habitSlice.reducer;

