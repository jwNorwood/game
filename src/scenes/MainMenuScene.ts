import Phaser from "phaser";
import store from "../components/system/store";
import Button from "../components/ui/Button";

export default class MainMenuScene extends Phaser.Scene {
  constructor() {
    super("main");
    console.log("MainMenuScene");
  }

  preload() {
    this.load.setBaseURL("http://labs.phaser.io");
  }

  create() {
    const centerX = this.cameras.main.width / 2;
    const centerY = this.cameras.main.height / 2;

    const title = this.add.text(centerX, 50, "Hello World!", {
      fontSize: "50px",
      color: "#ffffff",
    }).setOrigin(0.5);

    const continueGame = new Button(centerX, centerY - 65, "Continue Game", this, () =>
      this.scene.switch("hello-world")
    );
    const start = new Button(centerX, centerY, "Start Game", this, () =>
      this.scene.switch("hello-world")
    );
    const settings = new Button(centerX, centerY + 65, "Game Settings", this, () =>
      this.scene.switch("settings")
    );
  }
}
