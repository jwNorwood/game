import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface SettingsState {
  masterVolume: number;
  musicVolume: number;
  effectsVolume: number;
  isMuted: boolean;
}

export const initialState: SettingsState = {
  masterVolume: 1,
  musicVolume: 1,
  effectsVolume: 1,
  isMuted: false,
};

export const settingsSlice = createSlice({
  name: 'settings',
  initialState,
  reducers: {
    setMasterVolume: (state, action: PayloadAction<number>) => {
      state.masterVolume = action.payload;
    },
    setMusicVolume: (state, action: PayloadAction<number>) => {
      state.musicVolume = action.payload;
    },
    setEffectsVolume: (state, action: PayloadAction<number>) => {
      state.effectsVolume = action.payload;
    },
    setMute: (state, action: PayloadAction<boolean>) => {
      state.isMuted = action.payload;
    },    
  }
});

export default settingsSlice.reducer;