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
    this._monsters.forEach((monster) => {
      while (monster.lifePoints > 0 && this._player.lifePoints > 0) {
        monster.attack(this._player);
        this._player.attack(monster);
      }
    });
    
    return super.fight();
  }
}