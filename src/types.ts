export enum EGamePhase {
  SETUP,
  PLACING_INITIAL_ARMIES,
  TURNS,
}

export enum ETurnPhase {
  REINFORCING = "REINFORCING",
  INVADING = "INVADING",
  FORTIFYING = "FORTIFYING",
}

export enum EInvadingPhase {
  SELECTING_ATTAKING_TERRITORY = "REINFORCING",
}

export const EPlayerColour = {
  BLUE: "BLUE",
  GREEN: "GREEN",
  YELLOW: "YELLOW",
  RED: "RED",
  ORANGE: "ORANGE",
  PURPLE: "PURPLE",
};

export interface ITerritory {
  armyCount: number;
}

export interface IPlayer {
  name: string;
  color: string;
  territories: { [key: string]: ITerritory };
  armyPoolCount: number;
}

export interface IMapProps {
  playerData: IMapPlayerData;
  showUnitIndicators: boolean;
  selectionIds: string[];
  handleOnClickTerritory: (territoryId: string) => void;
  handleMouseEnterTerritory: (territoryId: string) => void;
  handleMouseExitTerritory: (territoryId: string) => void;
  selectionColour?: string;
}

export interface IMapPlayerData {
  [key: string]: IPlayer;
}

export interface ITerritoryDataMap {
  [key: string]: ITerritory;
}

export interface ITerritoryColourMap {
  [key: string]: string;
}
