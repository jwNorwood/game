const createCard = (scene, card) => {
  let makeCard = scene.rexUI.add.sizer({
    orientation: "y",
    space: { left: 20, right: 20, top: 20, bottom: 20, item: 25 },
    draggable: true,
    sizerEvents: true,
  });
  
  makeCard
    .addBackground(scene.rexUI.add.roundRectangle(0, 0, 1, 1, 20, 0x4e342e))
    .add(createTitle(makeCard.scene, card), { expand: false, align: "right" })
    .add(createCost(makeCard.scene, card), { expand: false, align: "right" })
    .add(createType(makeCard.scene, card), { expand: false, align: "left" })
    .add(createDescription(makeCard.scene, card), {
      expand: false,
      align: "left",
    })
    .setDataEnabled();

  makeCard.data.set("card", card)
  return makeCard;
};

const createDescription = (scene, card) => {
  return scene.rexUI.add.label({
    text: scene.rexUI.add.BBCodeText(0, 0, card.description, {
      fontSize: "16px",
    }),
  });
};

const createTitle = (scene, card) => {
  console.log(card);
  return scene.rexUI.add.label({
    text: scene.rexUI.add.BBCodeText(0, 0, card.name, { fontSize: "20px" }),
  });
};

const createType = (scene, card) => {
  return scene.rexUI.add.label({
    text: scene.rexUI.add.BBCodeText(0, 0, `${card.type} - ${card.subType}`, {
      fontSize: "16px",
    }),
  });
};

const createCost = (scene, card) => {
  return scene.rexUI.add.label({
    text: scene.rexUI.add.BBCodeText(0, 0, `${card.actionCost}`, {
      fontSize: "16px",
    }),
  });
};

export default createCard;
