import Phaser from "phaser";
import store from "../components/system/store";
import Button from "../components/ui/Button";

export default class SettingsScene extends Phaser.Scene {
  constructor() {
    super("settings");
    console.log("Settings");
  }

  preload() {
    this.load.setBaseURL("http://labs.phaser.io");
  }

  create() {
    const centerX = this.cameras.main.width / 2;
    const centerY = this.cameras.main.height / 2;

    const title = this.add.text(centerX, 50, "Game Settings", {
      fontSize: "50px",
      color: "#ffffff",
    }).setOrigin(0.5);
   

    const continueGame = new Button(75, centerY - 65, "Option 1", this, () =>
      console.log("Continue Game")
    );
    const start = new Button(75, centerY, "Option 2", this, () =>
      console.log("Continue Game")
    );
    const settings = new Button(75, centerY + 65, "Option 3", this, () =>
      console.log("Game Settings")
    );

    const backButton = new Button(75, 50, "Back", this, () =>
      this.scene.switch("main")
    );
  }
}
