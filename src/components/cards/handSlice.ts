import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import CardInterface from './card';

export interface HandInterface {
  cards: CardInterface[];
}

export const initialState: HandInterface = {
  cards: [] as CardInterface[],
};

export const handSlice = createSlice({
  name: 'deck',
  initialState,
  reducers: {
    addCard: (state, action: PayloadAction<CardInterface>) => {
      state.cards.push(action.payload);
    },
    removeCard: (state, action: PayloadAction<CardInterface>) => {
      state.cards = state.cards.filter((card) => card.id !== action.payload.id);
    },
  }
});

export default handSlice.reducer;