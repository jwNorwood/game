import Card from "~/components/cards/card";

const Fire = new Card({
  id: 3,
  name: "Fire",
  description: "Fire attack",
  actionCost: 1,
  heatCost: 0,
  rarity: 1,
  type: "attack",
  subType: "basic",
  targetSelf: false,
  targetEnemy: true,
  imagePath: "assets/cards/fire.png",
  playAudio: "assets/audio/fire.mp3",
  playAnimation: "fire",
  onPlay: (): void => {
    console.log("we attacked with fire");
  },
  onDraw: (): void => {
    console.log("we attacked with fire");
  },
  onShuffle: (): void => {
    console.log("we shuffled in fire");
  },
  onConsume: (): void => {
    console.log("we consumed fire");
  },
  onDiscard: (): void => {
    console.log("we discarded fire");
  },
});

export default Fire;
