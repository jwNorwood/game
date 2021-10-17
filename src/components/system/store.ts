import { configureStore } from "@reduxjs/toolkit";
import shipSlice from "../entities/player/shipSlice";
import enemyReducer from "../entities/enemy/enemySlice";
import pilotReducer from "../entities/player/pilotSlice";
import gameReducer from "./reducer/gameSlice";
import deckReducer from "../cards/deckSlice";
import handReducer from "../cards/handSlice";

const store = configureStore({
  reducer: {
    ship: shipSlice,
    pilot: pilotReducer,
    enemy: enemyReducer,
    game: gameReducer,
    deck: deckReducer,
    hand: handReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;