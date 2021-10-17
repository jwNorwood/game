import Card from "~/components/cards/card";

const Shoot = new Card({
  id: 3,
  name: "Shoot",
  description: "Shoot attack",
  actionCost: 1,
  heatCost: 0,
  rarity: 1,
  type: "attack",
  subType: "basic",
  targetSelf: false,
  targetEnemy: true,
  imagePath: "assets/cards/shoot.png",
  playAudio: "assets/audio/shoot.mp3",
  playAnimation: "shoot",
  onPlay: (): void => {
    console.log("we attacked with shoot");
  },
  onDraw: (): void => {
    console.log("we attacked with shoot");
  },
  onShuffle: (): void => {
    console.log("we shuffled in shoot");
  },
  onConsume: (): void => {
    console.log("we consumed shoot");
  },
  onDiscard: (): void => {
    console.log("we discarded shoot");
  },
});

export default Shoot;
