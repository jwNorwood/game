import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface PilotState {
  id: string;
  name: string;
  currentHeath: number;
  maxHealth: number;
}

export const initialState: PilotState = {
  id: '',
  name: '',
  currentHeath: 0,
  maxHealth: 0,
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