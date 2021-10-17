import modList from "../mods/modsList";
import cardsList from "../cards/cardsList";

function generateCurrency(currency: any, valueMod: any) {
  return Math.floor(Math.random() * (currency * valueMod));
}

function getItemFromList(list: any, numOfItems: number, valueMod: any) {
  let listLength = list.length;
  let itemIndexes: any[] = [];
  let selectedItems: any[] = [];

  while (selectedItems.length < numOfItems) {
    let randomIndex = Math.floor(Math.random() * listLength);
    let randomItem = list[randomIndex];

    if (itemIndexes.indexOf(randomIndex) === -1) {
      itemIndexes.push(randomIndex);
      selectedItems.push(randomItem);
    } 
  }
}

export const generateRewards = ( cards: integer, mods: integer, currency: integer, valueMod: integer) => {
  let cardReward = getItemFromList(cardsList, cards, valueMod);
  let modReward = getItemFromList(modList, mods, valueMod);
  let currencyReward = generateCurrency(currency, valueMod);
  return { 'cards': cardReward, 'mods': modReward , 'currency': currencyReward };
};
