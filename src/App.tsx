import React, { useState, useEffect } from "react";
import { WorldMap } from "./maps/WorldMap";
import { connections } from "./maps/WorldMapData";
import { ETurnPhase, IPlayer, EGamePhase, IMapPlayerData } from "./types";
import _ from "lodash";
import {
  distributeIntoGroups,
  territoryNamesToInitialTroopCount,
  randomPlayerColours,
} from "./utils";
import "./App.css";
import produce from "immer";

export interface IAppProps {
  playerNames: string[];
}

export const App = (props: IAppProps) => {
  // core game stuff
  const [players, setPlayers] = useState<IPlayer[]>([]);
  const [
    currentHoveredTerritoryName,
    setCurrentHoveredTerritoryName,
  ] = useState<string>("");
  const [currentPlayerIndex, setCurrentPlayerIndex] = useState<number>(0);
  const [showUnitIndicators, setShowUnitIndicators] = useState<boolean>(true);
  const [playerMapData, setPlayerMapData] = useState<IMapPlayerData>({});
  const [currentGamePhase, setCurrentGamePhase] = useState<EGamePhase>(
    EGamePhase.SETUP
  );
  const [currentTurnPhase, setCurrentTurnPhase] = useState<ETurnPhase>(
    ETurnPhase.REINFORCING
  );

  // invading stuff
  const [invadingFromTerritory, setInvadingFromTerritory] = useState<string>(
    ""
  );

  const currentPlayer = (): IPlayer => {
    return players[currentPlayerIndex];
  };

  const handleOnClickTerritory = (territoryName: string) => {
    const isOwnedByCurrentPlayer =
      playerMapData[currentPlayer().name].territories[territoryName] !==
      undefined;

    if (!isOwnedByCurrentPlayer) {
      return false;
    }

    if (currentTurnPhase === ETurnPhase.REINFORCING) {
      handleReinforcingClick(territoryName);
    }

    if (currentTurnPhase === ETurnPhase.INVADING) {
      handleInvadingSelectingFromTerritory(territoryName);
    }
  };

  const handleReinforcingClick = (territoryName: string) => {
    if (currentPlayer().armyPoolCount <= 0) {
      return false;
    }

    // we need to remove one from the current players army count
    const p = produce(players, (draft: IPlayer[]) => {
      draft[currentPlayerIndex].armyPoolCount =
        currentPlayer().armyPoolCount - 1;
    });
    setPlayers(p);

    // ...and add one to the playerMapData for that territory
    const pmd = produce(playerMapData, (draft: IMapPlayerData) => {
      draft[currentPlayer().name].territories[territoryName].armyCount += 1;
    });
    setPlayerMapData(pmd);
  };

  const handleInvadingSelectingFromTerritory = (territoryName: string) => {
    setInvadingFromTerritory(territoryName);
  };

  const handleMouseEnterTerritory = (territoryId: string) => {
    setCurrentHoveredTerritoryName(territoryId);
  };

  const handleMouseExitTerritory = (territoryId: string) => {
    setCurrentHoveredTerritoryName(territoryId);
  };

  // on mount, we turn the player names into full players
  // and set the current player
  useEffect(() => {
    const colours = randomPlayerColours(props.playerNames.length);
    const players: IPlayer[] = props.playerNames.map((playerName, index) => {
      return {
        name: playerName,
        color: colours[index],
        territories: {},
        armyPoolCount: 10,
      };
    });

    setPlayers(players);
    setCurrentPlayerIndex(0);
  }, []);

  const endTurn = () => {
    let nextPlayerIndex = currentPlayerIndex + 1;
    if (nextPlayerIndex > players.length - 1) {
      nextPlayerIndex = 0;
    }

    setCurrentPlayerIndex(nextPlayerIndex);
    setCurrentGamePhase(EGamePhase.TURNS);
    setCurrentTurnPhase(ETurnPhase.REINFORCING);
  };

  // we turn the players into playerMapData
  // and give it to the world map
  const distributeInitialTerritories = () => {
    const territoryNameChunks = distributeIntoGroups(
      _.shuffle(Object.keys(connections)),
      players.length
    );

    const playerMapData: IMapPlayerData = {};

    territoryNameChunks.forEach((territories, i) => {
      playerMapData[players[i].name] = {
        ...players[i],
        territories: territoryNamesToInitialTroopCount(territories),
      };
    });

    setPlayerMapData(playerMapData);
    setCurrentGamePhase(EGamePhase.TURNS);
  };

  return (
    <React.Fragment>
      <div>
        {currentGamePhase === EGamePhase.TURNS && (
          <div>
            <span>{currentHoveredTerritoryName}</span>
            <br />
            <span>current player: </span>

            <br />
            <span className={`name-label ${currentPlayer().color}`}>
              {currentPlayer().name}
            </span>
            <br />
            <span>{currentPlayer().name}</span>
            <span> is currently {currentTurnPhase}</span>
            <br />
            <span>army pool: {currentPlayer().armyPoolCount}</span>
            <br />

            {currentTurnPhase === ETurnPhase.REINFORCING && (
              <button
                onClick={() => {
                  setCurrentTurnPhase(ETurnPhase.INVADING);
                }}
              >
                End Reinforcing
              </button>
            )}
            <br />

            <button onClick={endTurn}>End Turn</button>

            <br />
          </div>
        )}

        {currentGamePhase === EGamePhase.SETUP && (
          <div>
            <button onClick={distributeInitialTerritories}>
              Distribute Territories
            </button>
          </div>
        )}

        <hr />

        <WorldMap
          playerData={playerMapData}
          showUnitIndicators={showUnitIndicators}
          selectionIds={[invadingFromTerritory]}
          handleOnClickTerritory={handleOnClickTerritory}
          handleMouseEnterTerritory={handleMouseEnterTerritory}
          handleMouseExitTerritory={handleMouseExitTerritory}
        />
      </div>
    </React.Fragment>
  );
};
