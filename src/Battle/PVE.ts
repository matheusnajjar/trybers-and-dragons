import Fighter, { SimpleFighter } from '../Fighter';
import Battle from './Battle';

export default class PVE extends Battle {
  private _player: Fighter;
  private _monsters: SimpleFighter[];

  constructor(player: Fighter, monsters: SimpleFighter[]) {
    super(player);
    this._player = player;
    this._monsters = monsters;
  }

  fight(): number {
    let outcome = 0;

    this._monsters.map((monster) => {
      monster.attack(this._player);
      if (this._player.lifePoints === -1) outcome = -1;

      return outcome;
    });

    this._monsters.map((monster) => {
      this._player.attack(monster);
      if (this._monsters.every(() =>
        monster.lifePoints === -1)) outcome = 1;

      return outcome;
    });

    return outcome;
  }
}