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

  updateCurrentHealth(currentHealth: integer) {
    this.currentHealth = currentHealth;
  }

  takeDamage(damage: integer) {
    this.currentHealth -= damage;
  }

  isAlive(): boolean {
    return this.currentHealth > 0;
  }

  isDead(): boolean {
    return !this.isAlive();
  }

  getHealthPercentage(): number {
    return this.currentHealth / this.maxHealth;
  }

  getHealthPercentageAsString(): string {
    return `${this.getHealthPercentage() * 100}%`;
  }
}
