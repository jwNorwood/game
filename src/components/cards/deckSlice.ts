import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import CardInterface from './card';

export interface DeckInterface {
  deck: CardInterface[];
}

export const initialState: DeckInterface = {
 deck: [] as CardInterface[],
};

export const deckSlice = createSlice({
  name: 'deck',
  initialState,
  reducers: {
    addCard: (state, action: PayloadAction<CardInterface>) => {
      state.deck.push(action.payload);
    },
    removeCard: (state, action: PayloadAction<CardInterface>) => {
      state.deck = state.deck.filter(card => card.id !== action.payload.id);
    },
    shuffleDeck: (state) => {
      state.deck = state.deck.sort(() => Math.random() - 0.5);
    },
    drawCard: (state) => {
      state.deck.pop();
    },
  }
});

export default deckSlice.reducer;