import { configureStore } from "@reduxjs/toolkit";
import playerReducer from "../entities/player/playerSlice";
import enemyReducer from "../entities/enemy/enemySlice";
import pilotReducer from "../entities/player/pilotSlice";
import gameReducer from "./reducer/gameSlice";

const store = configureStore({
  reducer: {
    player: playerReducer,
    pilot: pilotReducer,
    game: gameReducer,
    enemy: enemyReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;