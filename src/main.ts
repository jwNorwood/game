import Phaser from "phaser";

import MainMenuScene from "./scenes/MainMenuScene";
import HelloWorldScene from "./scenes/HelloWorldScene";
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
  scene: [MainMenuScene, HelloWorldScene, SettingsScene],
};

export default new Phaser.Game(config);
