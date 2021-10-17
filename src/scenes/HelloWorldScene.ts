import Phaser from "phaser";
import store from "../components/system/store";
import Button from "../components/ui/Button";
import cardsList from "~/components/cards/cardsList";

// do some messing around in here
// updating the store

export default class HelloWorldScene extends Phaser.Scene {
  constructor() {
    super("hello-world");
    console.log("Hello World Scene");
    console.log(cardsList);
  }

  preload() {
    this.load.setBaseURL("http://labs.phaser.io");
  }

  create() {
    console.log(store.getState());
    const centerX = this.cameras.main.width / 2;
    const centerY = this.cameras.main.height / 2;

    const title = this.add.text(centerX, 50, "Hello World??", {
      fontSize: "50px",
      color: "#ffffff",
    }).setOrigin(0.5);

    const backButton = new Button(75, 50, "Back", this, () =>
      this.scene.switch("main")
    );
  }
}
