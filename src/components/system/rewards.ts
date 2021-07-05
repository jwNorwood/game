// generate rewards ( Cards , Mods , Gold )
// based on encounter type ( normal / miniboss / boss / special )

export const generateRewards = ( cards: integer, mods: integer, gold: integer, valueMod: integer) => {
  let cardReward = getCards(cards, valueMod);
  let modReward = getMods(mods, valueMod);
  let goldReward = generateGold(gold, valueMod);
  return { 'cards': cardReward, 'mods': modReward , 'gold': goldReward };
}

function getCards(cards: any, valueMod: any) {
  throw new Error("Function not implemented.");
}

function getMods(mods: any, valueMod: any) {
  throw new Error("Function not implemented.");
}

function generateGold(gold: any, valueMod: any) {
  // return a random number with a modifier
  throw new Error("Function not implemented.");
}
