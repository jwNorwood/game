import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface ShipInterface {
  id: number;
  name: string;
  image: string;
  health: number;
  maxHealth: number;
  heat: number;
}

export const initialState: ShipInterface = {
  id: 1,
  name: 'Default Mech',
  image: '',
  health: 100,
  maxHealth: 100,
  heat: 0,
};

export const shipSlice = createSlice({
  name: 'pilot',
  initialState,
  reducers: {
    setPlayer: (state, action: PayloadAction<ShipInterface>) => {
      state = action.payload;
    }
  }
});

export default shipSlice.reducer;