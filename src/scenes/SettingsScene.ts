import Phaser from "phaser";
import store from "../components/system/store";
import createButton from "~/components/ui/createButton";

export default class SettingsScene extends Phaser.Scene {
  constructor() {
    super("settings");
    console.log("Settings");
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

    const title = this.add
      .text(centerX, 50, "Game Settings", {
        fontSize: "50px",
        color: "#ffffff",
      })
      .setOrigin(0.5);
    backButton(this, 60, 50);
    addSlider(
      this,
      50,
      200,
      (value: number) => {
        store.dispatch({
          type: "settings/setMasterVolume",
          payload: value,
        });
      },
      "Master Volume",
      store.getState().settings.masterVolume
    );
    addSlider(
      this,
      50,
      300,
      (value: number) => {
        store.dispatch({
          type: "settings/setMusicVolume",
          payload: value,
        });
      },
      "Music Volume",
      store.getState().settings.musicVolume
    );
    addSlider(
      this,
      50,
      400,
      (value: number) => {
        store.dispatch({
          type: "settings/setEffectsVolume",
          payload: value,
        });
      },
      "Effects Volume",
      store.getState().settings.effectsVolume
    );
  }
}

const backButton = (scene: any, x: number, y: number) => {
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

  back.on("button.click", (button: any, index: any) => {
    scene.scene.switch("main");
  });
};

const addSlider = (
  scene: any,
  x: number,
  y: number,
  updateValue: Function,
  label: string,
  initValue: number
) => {
  scene.rexUI.add
    .slider({
      anchor: {
        left: `left+${x}`,
      },
      y: y,
      width: 300,
      height: 30,
      orientation: "x",

      track: scene.rexUI.add.roundRectangle(0, 0, 0, 0, 10, 0x8e382e),
      indicator: scene.rexUI.add.roundRectangle(0, 0, 0, 0, 10, 0x4e342e),
      thumb: scene.rexUI.add.roundRectangle(0, 0, 0, 0, 10, 0x4e342e),

      input: "click", // 'drag'|'click'
      easeValue: { duration: 250 },
      value: initValue || 0,

      valuechangeCallback: function (value: any) {
        updateValue(value);
      },
    })
    .layout();

  scene.rexUI.add.label({
    text: scene.add.text(400, y - 10, label, {
      fontSize: 18,
    }),
    space: {
      left: 10,
      right: 10,
      top: 20,
      bottom: 20,
    },

    align: "center",
  });
};
