import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface PlayerState {
    id: string;
    name: string;
    image: string;
}

export const initialState: PlayerState = {
  id: '',
  name: '',
  image: ''
};

export const playerSlice = createSlice({
  name: 'pilot',
  initialState,
  reducers: {
    setPlayer: (state, action: PayloadAction<PlayerState>) => {
      state = action.payload;
    }
  }
});

export default playerSlice.reducer;