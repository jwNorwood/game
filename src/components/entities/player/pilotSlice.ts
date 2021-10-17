import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface PilotState {
  id: number;
  name: string;
  currentHeath: number;
  maxHealth: number;
}

export const initialState: PilotState = {
  id: 1,
  name: 'Stan McMan',
  currentHeath: 100,
  maxHealth: 100,
};

export const pilotSlice = createSlice({
  name: 'pilot',
  initialState,
  reducers: {
    setPilot: (state, action: PayloadAction<PilotState>) => {
      state.id = action.payload.id;
      state.name = action.payload.name;
      state.currentHeath = action.payload.currentHeath;
      state.maxHealth = action.payload.maxHealth;
    },
    updateCurrentHealth: (state, action: PayloadAction<number>) => {
      state.currentHeath = action.payload;
    },
    updateMaxHealth: (state, action: PayloadAction<number>) => {
      state.maxHealth = action.payload;
    },
  }
});

export default pilotSlice.reducer;