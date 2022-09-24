import Battle, { PVE, PVP } from './Battle';
import Character from './Character';
import Dragon from './Dragon';
import Monster from './Monster';

export const player1 = new Character('José');
export const player2 = new Character('Fabrícia');
export const player3 = new Character('Taylor');

export const monster1 = new Monster();
export const monster2 = new Dragon();

export const pvp = new PVP(player2, player3);
export const pve = new PVE(player1, [monster1, monster2]);

for (let index = 0; index < 4; index += 1) {
  player1.levelUp();
}

export const runBattles = (battles: Battle[]) => {
  battles.forEach((battle) => battle.fight());
};
