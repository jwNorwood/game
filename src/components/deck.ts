export default class Deck {
  deck: Array<object>;

  constructor(deck: Array<object>) {
    this.deck = deck;
  }

  shuffle() {
    return this.deck;
  }

  addCard(card: object) {
    this.deck.push(card);
  }

  drawCard() {
    return this.deck.pop();
  }

  removeCard(card: object) {
    var idx = this.deck.findIndex((p) => p === card);
    this.deck = this.deck.splice(idx, 1);
  }
}
