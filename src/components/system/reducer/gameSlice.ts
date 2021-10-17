import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface GameState {
  currency: number;
  gameOver: boolean;
  inCombat: boolean;
  rewardOpen: boolean;
  level: number;
  stage: number;
}

export const initialState: GameState = {
  currency: 0,
  gameOver: false,
  inCombat: false,
  rewardOpen: false,
  level: 1,
  stage: 1,
};

export const gameSlice = createSlice({
  name: 'game',
  initialState,
  reducers: {
    setCurrency: (state, action: PayloadAction<number>) => {
      state.currency = action.payload;
    },
    setGameOver: (state, action: PayloadAction<boolean>) => {
      state.gameOver = action.payload;
    },
    setInCombat: (state, action: PayloadAction<boolean>) => {
      state.inCombat = action.payload;
    },
    setRewardOpen: (state, action: PayloadAction<boolean>) => {
      state.rewardOpen = action.payload;
    },
    setLevel: (state, action: PayloadAction<number>) => {
      state.level = action.payload;
    },
    setStage: (state, action: PayloadAction<number>) => {
      state.stage = action.payload;
    },
  }
});

export default gameSlice.reducer;