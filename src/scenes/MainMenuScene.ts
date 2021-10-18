import Phaser from "phaser";
import store from "../components/system/store";
import createButton from "~/components/ui/createButton";

export default class MainMenuScene extends Phaser.Scene {
  constructor() {
    super("main");
    console.log("MainMenuScene");
  }

  preload() {
    this.load.setBaseURL("http://labs.phaser.io");
    this.load.scenePlugin({
      key: "rexuiplugin",
      url: "https://raw.githubusercontent.com/rexrainbow/phaser3-rex-notes/master/dist/rexuiplugin.min.js",
      sceneKey: "rexUI",
    });
  }

  create() {
    const centerX = this.cameras.main.width / 2;
    const centerY = this.cameras.main.height / 2;

    const title = this.add.text(centerX, 50, "Hello World!", {
      fontSize: "50px",
      color: "#ffffff",
    }).setOrigin(0.5);

    nav(this, centerX, centerY);
  }
}

const nav = (scene, x, y) => {
  const expand = true;
  const navagation = scene.rexUI.add
    .buttons({
      x: x,
      y: y,
      width: 300,
      orientation: "y",

      buttons: [
        createButton(scene, "Continue Game"),
        createButton(scene, "Start Game"),
        createButton(scene, "Game Settings"),
      ],

      space: {
        left: 10,
        right: 10,
        top: 20,
        bottom: 20,
        item: 20,
      },
      expand: expand,
    })
    .layout();

  navagation.on("button.click", (button, index) => {
    console.log(`Button ${index} clicked`);
    if (index === 0 || index === 1) {
      scene.scene.switch("game")
    }
    if (index === 2) {
      scene.scene.switch("settings")
  });
}