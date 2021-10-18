import Phaser from "phaser";
import store from "../components/system/store";
import cardsList from "~/components/cards/cardsList";
import createButton from "../components/ui/createButton";
import createCard from "../components/ui/createCard";

export default class GameScene extends Phaser.Scene {
  constructor() {
    super("game");
    console.log("Game Scene");
    console.log(cardsList);
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
    console.log(store.getState());
    const centerX = this.cameras.main.width / 2;
    const centerY = this.cameras.main.height / 2;

    const card = createCard(this, cardsList[0])
      .setMinWidth(300)
      .layout()
      .setPosition(400, 300)

    card.on("pointerdown", () => {
      console.log("clicked", card.data.get("card"));
    });
    
    const title = this.add
      .text(centerX, 50, "Hello World??", {
        fontSize: "50px",
        color: "#ffffff",
      })
      .setOrigin(0.5);

    backButton(this, 60, 50);
  }
}

const backButton = (scene, x, y) => {
  const expand = true;
  const back = scene.rexUI.add
    .buttons({
      x: x,
      y: y,
      width: 100,
      orientation: "y",

      buttons: [createButton(scene, "Back")],

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

  back.on("button.click", (button, index) => {
    scene.scene.switch("main");
  });
};
