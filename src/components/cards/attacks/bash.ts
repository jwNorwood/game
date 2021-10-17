import Card from "~/components/cards/card";

const Bash = new Card({
  id: 2,
  name: "Bash",
  description: "Bashing attack",
  actionCost: 2,
  heatCost: 0,
  rarity: 1,
  type: "attack",
  subType: "basic",
  targetSelf: false,
  targetEnemy: true,
  imagePath: "assets/cards/bash.png",
  playAudio: "assets/audio/bash.mp3",
  playAnimation: "bash",
  onPlay: (): void => {
    console.log("we attacked with bash");
  },
  onDraw: (): void => {
    console.log("we attacked with bash");
  },
  onShuffle: (): void => {
    console.log("we shuffled in bash");
  },
  onConsume: (): void => {
    console.log("we consumed bash");
  },
  onDiscard: (): void => {
    console.log("we discarded bash");
  },
});

export default Bash;
