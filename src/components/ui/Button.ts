class Button {
  constructor(x, y, label, scene, callback) {
    const button = scene.add
      .text(x, y, label)
      .setOrigin(0.5)
      .setPadding(15)
      .setStyle({
        fill: "#F5CDAA",
        backgroundColor: "#5D5B6A",
        align: "center",
        fontSize: "20px",
      })
      .setInteractive({ useHandCursor: true })
      .on("pointerdown", () => callback())
      .on("pointerover", () => button.setStyle({ fill: "#CFB495", backgroundColor: "#758184" }))
      .on("pointerout", () => button.setStyle({ fill: "#F5CDAA", backgroundColor: "#5D5B6A" }));
  }
}

export default Button;
