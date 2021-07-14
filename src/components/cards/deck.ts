export default class Deck {
  deck: Array<object>;

  constructor(deck: Array<object>) {
    this.deck = deck;
  }

  public shuffle() {
    return this.deck;
  }

  public addCard(card: object) {
    this.deck.push(card);
  }

  public drawCard() {
    return this.deck.pop();
  }

  public removeCard(card: object) {
    var idx = this.deck.findIndex((p) => p === card);
    this.deck = this.deck.splice(idx, 1);
  }

  public removeCards(cards: Array<object>) {
    var idx = this.deck.findIndex((p) => cards.includes(p));
    this.deck = this.deck.splice(idx, 1);
  }

  public removeAllCards() {
    this.deck = [];
  }

  public getCards() {
    return this.deck;
  }

  public getCardCount() {
    return this.deck.length;
  }

  public getCard(idx: number) {
    return this.deck[idx];
  }

  public getCardIndex(card: object) {
    return this.deck.findIndex((p) => p === card);
  }

  public getCardByIndex(idx: number) {
    return this.deck[idx];
  }

  public getCardByProperty(prop: string, value: string) {
    return this.deck.find((p) => p[prop] === value);
  }

  public getCardsByProperty(prop: string, value: string) {
    return this.deck.filter((p) => p[prop] === value);
  }

  public getCardsByIndex(idx: number) {
    return this.deck.slice(idx, idx + 1);
  }

  public getCardsByIndexes(idxs: Array<number>) {
    return this.deck.slice(idxs[0], idxs[1]);
  }

  public getCardsByIndexesReverse(idxs: Array<number>) {
    return this.deck.slice(idxs[1], idxs[0]);
  }
}
