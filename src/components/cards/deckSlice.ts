import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import CardInterface from './card';

export interface DeckInterface {
  cards: CardInterface[];
}

export const initialState: DeckInterface = {
  cards: [] as CardInterface[],
};

export const deckSlice = createSlice({
  name: 'deck',
  initialState,
  reducers: {
    addCard: (state, action: PayloadAction<CardInterface>) => {
      state.cards.push(action.payload);
    },
    removeCard: (state, action: PayloadAction<CardInterface>) => {
      state.cards = state.cards.filter(card => card.id !== action.payload.id);
    },
    shuffleDeck: (state) => {
      state.cards = state.cards.sort(() => Math.random() - 0.5);
    },
    drawCard: (state) => {
      state.cards.pop();
    },
  }
});

export default deckSlice.reducer;