export default class Enemy {
  constructor(
    name: string,
    type: string,
    maxHealth: integer,
    currentHealth: integer
  ) {
    this.maxHealth = maxHealth;
    this.currentHealth = currentHealth;
    this.type = type;
    this.name = name;
  }

  name: string;
  type: string;
  currentHealth: integer;
  maxHealth: integer;

  updateMaxHealth(maxHealth: integer) {
    this.maxHealth = maxHealth;
  }

  updateCurrentHealth(currentHealth: integer) {
    this.currentHealth = currentHealth;
  }
}
