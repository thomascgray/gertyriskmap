import React from "react";
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from "@storybook/react/types-6-0";

import { WorldMap } from "./WorldMap";
import { EPlayerColour, IMapProps } from "../types";

export default {
  title: "Maps/World Map",
  component: WorldMap,
} as Meta;

const Template: Story<IMapProps> = (args) => <WorldMap {...args} />;

export const NoUnits = Template.bind({});
NoUnits.args = {
  handleMouseEnterTerritory: () => {},
  handleMouseExitTerritory: () => {},
  handleOnClickTerritory: (territoryId: string) => {
    alert(territoryId);
  },
  playerData: undefined,
};

export const WithOnePlayerUnits = Template.bind({});
WithOnePlayerUnits.args = {
  handleMouseEnterTerritory: () => {},
  handleMouseExitTerritory: () => {},
  handleOnClickTerritory: (territoryId: string) => {
    alert(territoryId);
  },
  showUnitIndicators: true,
  playerData: {
    "miss alice": {
      name: "miss alice",
      color: EPlayerColour.BLUE,
      territories: {
        Brazil: {
          armyCount: 4,
        },
      },
      armyPoolCount: 10,
    },
  },
};

export const WithSeveralPlayerUnits = Template.bind({});
WithSeveralPlayerUnits.args = {
  handleMouseEnterTerritory: () => {},
  handleMouseExitTerritory: () => {},
  handleOnClickTerritory: (territoryId: string) => {
    alert(territoryId);
  },
  showUnitIndicators: true,
  playerData: {
    alice: {
      name: "alice",
      color: EPlayerColour.BLUE,
      territories: {
        Brazil: {
          armyCount: 24,
        },
        Alberta: {
          armyCount: 16,
        },
        Argentina: {
          armyCount: 1,
        },
      },
      armyPoolCount: 10,
    },
    tom: {
      name: "tom",
      color: EPlayerColour.GREEN,
      territories: {
        "Great Britain": {
          armyCount: 4,
        },
        "North Africa": {
          armyCount: 9,
        },
        "Western Australia": {
          armyCount: 31,
        },
      },
      armyPoolCount: 10,
    },
    james: {
      name: "james",
      color: EPlayerColour.RED,
      territories: {
        Venezuela: {
          armyCount: 1,
        },
        "Western United States": {
          armyCount: 12,
        },
      },
      armyPoolCount: 10,
    },
    greaves: {
      name: "greaves",
      color: EPlayerColour.YELLOW,
      territories: {
        India: {
          armyCount: 1,
        },
        Mongolia: {
          armyCount: 88,
        },
      },
      armyPoolCount: 10,
    },
  },
};

export const UnitsInEveryCountryAnd3TerritoriesSelected = Template.bind({});
UnitsInEveryCountryAnd3TerritoriesSelected.args = {
  handleMouseEnterTerritory: () => {},
  handleMouseExitTerritory: () => {},
  handleOnClickTerritory: (territoryId: string) => {
    alert(territoryId);
  },
  showUnitIndicators: true,

  selectionIds: ["Brazil", "Venezuela", "Peru"],
  playerData: {
    alice: {
      name: "alice",
      color: EPlayerColour.PURPLE,
      territories: {
        Afghanistan: { armyCount: 1 },
        Alaska: { armyCount: 1 },
        Alberta: { armyCount: 1 },
        Argentina: { armyCount: 1 },
        Brazil: { armyCount: 1 },
        "Central America": { armyCount: 1 },
        China: { armyCount: 1 },
        Congo: { armyCount: 1 },
        "East Africa": { armyCount: 1 },
        "Eastern Australia": { armyCount: 1 },
        "Eastern United States": { armyCount: 1 },
        Egypt: { armyCount: 1 },
        "Great Britain": { armyCount: 1 },
        Greenland: { armyCount: 1 },
        Iceland: { armyCount: 1 },
        India: { armyCount: 1 },
        Indonesia: { armyCount: 1 },
        Irkutsk: { armyCount: 1 },
        Japan: { armyCount: 1 },
      },
      armyPoolCount: 10,
    },
    tom: {
      name: "tom",
      color: EPlayerColour.ORANGE,
      armyPoolCount: 10,

      territories: {
        Kamchatka: { armyCount: 1 },
        Madagascar: { armyCount: 1 },
        "Middle East": { armyCount: 1 },
        Mongolia: { armyCount: 1 },
        "New Guinea": { armyCount: 1 },
        "North Africa": { armyCount: 1 },
        "Northern Europe": { armyCount: 1 },
        "Northwest Territory": { armyCount: 1 },
        Ontario: { armyCount: 1 },
        Peru: { armyCount: 1 },
        Quebec: { armyCount: 1 },
        Scandinavia: { armyCount: 1 },
        Siam: { armyCount: 1 },
        Siberia: { armyCount: 1 },
        "South Africa": { armyCount: 1 },
        "Southern Europe": { armyCount: 1 },
        Ukraine: { armyCount: 1 },
        Ural: { armyCount: 1 },
        Venezuela: { armyCount: 1 },
        "Western Australia": { armyCount: 1 },
        "Western Europe": { armyCount: 1 },
        "Western United States": { armyCount: 1 },
        Yakutsk: { armyCount: 1 },
      },
    },
  },
};

export const OneOwnedTerritorySelected = Template.bind({});
OneOwnedTerritorySelected.args = {
  handleMouseEnterTerritory: () => {},
  handleMouseExitTerritory: () => {},
  handleOnClickTerritory: (territoryId: string) => {
    alert(territoryId);
  },
  showUnitIndicators: true,
  selectionIds: ["Brazil"],
  playerData: {
    "miss alice": {
      name: "miss alice",
      color: EPlayerColour.BLUE,
      territories: {
        Brazil: {
          armyCount: 4,
        },
      },
      armyPoolCount: 10,
    },
  },
};
