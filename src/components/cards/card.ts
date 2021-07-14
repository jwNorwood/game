interface CardInterface {
  id: integer;
  name: string;
  description: string;
  actionCost: integer;
  heatCost: integer;
  rarity: integer;
  type: string;
  subType: string;
  targetSelf: boolean;
  targetEnemy: boolean;

  onPlay: Function;
  onDraw: Function;
  onShuffle: Function;
  onConsume: Function;
  onDiscard: Function;
}

export default class Card {
  public name: string;
  public description: string;
  public actionCost: integer;
  public heatCost: integer;
  public rarity: integer;
  public type: string;
  public subType: string;

  public onPlay: Function;
  public onDraw: Function;
  public onShuffle: Function;
  public onConsume: Function;
  public onDiscard: Function;
  public targetSelf: boolean;
  public targetEnemy: boolean;

  public id: integer;

  constructor({
    name,
    description,
    actionCost,
    heatCost,
    id,
    rarity,
    onPlay,
    onDraw,
    onShuffle,
    onConsume,
    onDiscard,
    targetSelf,
    targetEnemy,
    type,
    subType,
  }: CardInterface) {
    this.name = name;
    this.description = description;
    this.actionCost = actionCost;
    this.heatCost = heatCost;
    this.id = id;
    this.rarity = rarity;
    this.onPlay = onPlay;
    this.onShuffle = onShuffle;
    this.onDraw = onDraw;
    this.onConsume = onConsume;
    this.onDiscard = onDiscard;
    this.targetSelf = targetSelf;
    this.targetEnemy = targetEnemy;
    this.type = type;
    this.subType = subType;
  }
  
  getName(): string {
    return this.name;
  }

  getDescription(): string {
    return this.description;
  }

  getActionCost(): integer {
    return this.actionCost;
  }

  getHeatCost(): integer {
    return this.heatCost;
  }

  getRarity(): integer {
    return this.rarity;
  }

  getId(): integer {
    return this.id;
  }
  
  getOnPlay(): Function {
    return this.onPlay;
  }

  getOnDraw(): Function {
    return this.onDraw;
  }

  getOnShuffle(): Function {
    return this.onShuffle;
  }

  getOnConsume(): Function {
    return this.onConsume;
  }

  canTargetSelf(): boolean {
    return this.targetSelf;
  }

  canTargetEnemy(): boolean {  
    return this.targetEnemy;
  }  
}
