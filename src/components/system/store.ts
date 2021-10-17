import { configureStore } from "@reduxjs/toolkit";
import shipSlice from "../entities/player/shipSlice";
import enemyReducer from "../entities/enemy/enemySlice";
import pilotReducer from "../entities/player/pilotSlice";
import gameReducer from "./reducer/gameSlice";
import deckReducer from "../cards/deckSlice";
import handReducer from "../cards/handSlice";
import settingsReducer from "./reducer/settingsSlice";

const store = configureStore({
  reducer: {
    settings: settingsReducer,
    game: gameReducer,
    ship: shipSlice,
    pilot: pilotReducer,
    enemy: enemyReducer,
    deck: deckReducer,
    hand: handReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;