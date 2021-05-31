interface CardInterface {
  id: integer;
  name: string;
  description: string;
  actionCost: integer;
  heatCost: integer;
  rarity: integer;

  onPlay: Function;
  onDraw: Function;
  onShuffle: Function;
  onConsume: Function;
}

export default class Card {
  public name: string;
  public description: string;
  public actionCost: integer;
  public heatCost: integer;
  public rarity: integer;

  public onPlay: Function;
  public onDraw: Function;
  public onShuffle: Function;
  public onConsume: Function;

  private id: integer;

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
  }
}
