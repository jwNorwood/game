import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface EnemyState {
  id: number;
  type: string;
  name: string;
  image: string;
  health: number;
  maxHealth: number;
}

export const initialState = {
  enemyList: [] as EnemyState[],
};

export const enemySlice = createSlice({
  name: 'enemies',
  initialState,
  reducers: {
    addEnemy: (state, action: PayloadAction<EnemyState>) => {
      state.enemyList.push(action.payload);
    },
    removeEnemy: (state, action: PayloadAction<EnemyState>) => {
      state.enemyList = state.enemyList.filter(enemy => enemy.id !== action.payload.id);
    },
  },
});

export default enemySlice.reducer;