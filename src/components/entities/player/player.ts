import Deck from "./../../deck";
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
  
  constructor(
    maxHealth: integer,
    currentHealth: integer,
    cash: integer,
    credits: integer,
    model: string,
    heat: integer,
    deck: Array<object>,
    body: any,
  ) {
    this.maxHealth = maxHealth;
    this.currentHealth = currentHealth;
    this.cash = cash;
    this.credits = credits;
    this.model = model;
    this.heat = heat;
    
    this.deck = new Deck(deck);
    this.body = new Body(body);
  }

  updateMaxHealth(maxHealth: integer) {
    this.maxHealth = maxHealth;
  }
  getMaxHealth() {
    return this.maxHealth;
  }

  updateCurrentHealth(currentHealth: integer) {
    this.currentHealth = currentHealth;
  }
  getCurrentHealth() {
    return this.currentHealth;
  }

  updateHeat(heat: integer) {
    this.heat = heat;
  }
  getHeat() {
    return this.heat;
  }

  updateCash(cash: integer) {
    this.cash = cash;
  }
  getCash() {
    return this.cash;
  }

  updateCredits(credits: integer) {
    this.credits = credits;
  }
  getCredits() {
    return this.credits;
  }

  getModel() {
    return this.model;
  }
}
