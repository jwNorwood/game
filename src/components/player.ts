import Deck from "./deck";
import Body from "./body";

export default class Player {
  constructor(
    maxHealth: integer,
    currentHealth: integer,
    deck: Array<object>,
    body: any,
    cash: integer,
    credits: integer,
    model: string
  ) {
    this.maxHealth = maxHealth;
    this.currentHealth = currentHealth;
    this.model = model;
    this.cash  = cash;
    this.credits = credits;
    this.deck = new Deck(deck);
    this.body = new Body(body);
  }

  model: string;
  currentHealth: integer;
  maxHealth: integer;
  deck: Class;
  body: Class;

  // current
  cash: integer;
  // meta
  credits: integer;

  updateMaxHealth(maxHealth: integer) {
    this.maxHealth = maxHealth;
  }

  updateCurrentHealth(currentHealth: integer) {
    this.currentHealth = currentHealth;
  }
}
