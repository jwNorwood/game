import Card from "~/components/cards/card";

const Slash = new Card({
  id: 1,
  name: "Slash",
  description: "Slashing attack",
  actionCost: 1,
  heatCost: 0,
  rarity: 1,
  type: "attack",
  subType: "basic",
  targetSelf: false,
  targetEnemy: true,
  imagePath: "assets/cards/slash.png",
  playAudio: "assets/audio/slash.mp3",
  playAnimation: "slash",
  onPlay: (): void => {
    console.log("we attacked with slash");
  },
  onDraw: (): void => {
    console.log("we attacked with slash");
  },
  onShuffle: (): void => {
    console.log("we shuffled in slash");
  },
  onConsume: (): void => {
    console.log("we consumed slash");
  },
  onDiscard: (): void => {
    console.log("we discarded slash");
  },
});

export default Slash;
