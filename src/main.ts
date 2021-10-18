import Phaser from "phaser";

import RexUIPlugin from 'phaser3-rex-plugins/templates/ui/ui-plugin.js';

import MainMenuScene from "./scenes/MainMenuScene";
import GameScene from "./scenes/GameScene";
import SettingsScene from "./scenes/SettingsScene";

const config: Phaser.Types.Core.GameConfig = {
  type: Phaser.AUTO,
  width: 800,
  height: 600,
  physics: {
    default: "arcade",
    arcade: {
      gravity: { y: 200 },
    },
  },
  plugins: {
    scene: [
      {
        key: 'rexUI',
        plugin: RexUIPlugin,
        mapping: 'rexUI'
      },
    ],
  },
  scene: [MainMenuScene, GameScene, SettingsScene],
};

export default new Phaser.Game(config);
