import React from "react";
import "./MapRenderer.css";
import { UnitIndicator } from "../UnitIndicator/UnitIndicator";
import { IMapPlayerData, ITerritoryColourMap } from "../../types";

export interface IMapRendererProps {
  playerData: IMapPlayerData;
  mapData: any;
  showUnitIndicators: boolean;
  handleOnClickTerritory: (territoryId: string) => void;
  handleMouseEnterTerritory: (territoryId: string) => void;
  handleMouseExitTerritory: (territoryId: string) => void;
  unitIndicatorPositions: any;
  selectionIds: string[];
  selectionColour?: string;
}

export const MapRenderer = (props: IMapRendererProps) => {
  let UnitIndicatorMarkup = null;
  let territoryColourMap: ITerritoryColourMap = {};

  const { selectionIds = [] } = props;

  if (props.playerData) {
    UnitIndicatorMarkup = Object.keys(props.playerData).map((playerName) => {
      const player = props.playerData[playerName];

      return Object.keys(player.territories).map((territoryName) => {
        const territory = player.territories[territoryName];

        return (
          <UnitIndicator
            key={territoryName}
            colour={player.color}
            territory={territoryName}
            // @ts-ignore
            top={props.unitIndicatorPositions[territoryName][0]}
            // @ts-ignore
            left={props.unitIndicatorPositions[territoryName][1]}
            count={territory.armyCount}
          />
        );
      });
    });

    Object.keys(props.playerData).forEach((playerName) => {
      const player = props.playerData[playerName];

      Object.keys(player.territories).forEach((territoryName) => {
        territoryColourMap[territoryName] = player.color;
      });
    });
  }

  const TerritoryMarkup = Object.keys(props.mapData.territories)
    .filter((territoryId) => !props.selectionIds.includes(territoryId))
    .map((territoryId) => {
      const territoryData = props.mapData.territories[territoryId];
      return (
        <path
          style={{
            stroke: selectionIds.includes(territoryId)
              ? props.selectionColour
              : "",
          }}
          className={`country ${territoryData.group} ${
            territoryColourMap[territoryId] || ""
          } ${selectionIds.includes(territoryId) ? "selected" : ""}`}
          onClick={() => props.handleOnClickTerritory(territoryId)}
          onMouseEnter={() => props.handleMouseEnterTerritory(territoryId)}
          onMouseLeave={() => props.handleMouseExitTerritory(territoryId)}
          id={territoryId}
          d={territoryData.d}
        />
      );
    });

  const SelectedTerritoryMarkup = props.selectionIds.map((territoryId) => {
    const territoryData = props.mapData.territories[territoryId];

    if (territoryData === undefined) {
      return null;
    }

    return (
      <path
        style={{
          stroke: selectionIds.includes(territoryId)
            ? props.selectionColour
            : "",
        }}
        className={`country ${territoryData.group} ${
          territoryColourMap[territoryId] || ""
        } ${selectionIds.includes(territoryId) ? "selected" : ""}`}
        onClick={() => props.handleOnClickTerritory(territoryId)}
        onMouseEnter={() => props.handleMouseEnterTerritory(territoryId)}
        onMouseLeave={() => props.handleMouseExitTerritory(territoryId)}
        id={territoryId}
        d={territoryData.d}
      />
    );
  });

  return (
    <div className="map-container">
      {props.showUnitIndicators && UnitIndicatorMarkup}
      <svg id="GameMap" width="100%" viewBox="0 0 1024 660">
        <defs>
          <radialGradient id="RadialGradientBlue">
            <stop offset="0%" stopColor="#429fde" />
            <stop offset="100%" stopColor="#2487c9" />
          </radialGradient>
          <radialGradient id="RadialGradientGreen">
            <stop offset="0%" stopColor="#47d583" />
            <stop offset="100%" stopColor="#28b061" />
          </radialGradient>
          <radialGradient id="RadialGradientPurple">
            <stop offset="0%" stopColor="#a265bb" />
            <stop offset="100%" stopColor="#944eb0" />
          </radialGradient>
          <radialGradient id="RadialGradientOrange">
            <stop offset="0%" stopColor="#eb9950" />
            <stop offset="100%" stopColor="#de7519" />
          </radialGradient>
          <radialGradient id="RadialGradientYellow">
            <stop offset="0%" stopColor="#f5d44f" />
            <stop offset="100%" stopColor="#e2b70d" />
          </radialGradient>
          <radialGradient id="RadialGradientRed">
            <stop offset="0%" stopColor="#ed7669" />
            <stop offset="100%" stopColor="#e53e2d" />
          </radialGradient>
          <radialGradient id="RadialGradientGray">
            <stop offset="0%" stopColor="#919c9d" />
            <stop offset="100%" stopColor="#768485" />
          </radialGradient>
        </defs>

        {TerritoryMarkup}
        {SelectedTerritoryMarkup}
      </svg>
    </div>
  );
};
