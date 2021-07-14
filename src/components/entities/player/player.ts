import Deck from "./../../cards/deck";
import Body from "./body";

export default class Player {
  private currentHealth: integer;
  private maxHealth: integer;
  // current
  private cash: integer;
  // meta
  private credits: integer;
  
  private model: string;
  private heat: integer;

  public deck: Class;
  public body: Class;
  public hand: Array<object>;
  
  constructor(
    maxHealth: integer,
    currentHealth: integer,
    cash: integer,
    credits: integer,
    model: string,
    heat: integer,
    deck: Array<object>,
    body: any,
    hand: Array<object>,
  ) {
    this.maxHealth = maxHealth;
    this.currentHealth = currentHealth;
    this.cash = cash;
    this.credits = credits;
    this.model = model;
    this.heat = heat;
    
    this.deck = new Deck(deck);
    this.body = new Body(body);
    this.hand = hand;
  }

  public updateMaxHealth(maxHealth: integer) {
    this.maxHealth = maxHealth;
  }

  public getMaxHealth() {
    return this.maxHealth;
  }

  public isDead() {
    return this.currentHealth >= 0;
  }

  public updateCurrentHealth(currentHealth: integer) {
    this.currentHealth = currentHealth;
  }

  public getCurrentHealth() {
    return this.currentHealth;
  }

  public updateHeat(heat: integer) {
    this.heat = heat;
  }

  public getHeat() {
    return this.heat;
  }

  public updateCash(cash: integer) {
    this.cash = cash;
  }

  public getCash() {
    return this.cash;
  }

  public updateCredits(credits: integer) {
    this.credits = credits;
  }

  public getCredits() {
    return this.credits;
  }

  public getModel() {
    return this.model;
  }

  public updateModel(model: string) {
    this.model = model;
  }

  public getDeck() {
    return this.deck;
  }

  public getBody() {
    return this.body;
  }

  public getCardCountInHand() {
    return this.hand.length;
  }
}
