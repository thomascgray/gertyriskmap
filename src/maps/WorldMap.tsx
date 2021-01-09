import React, { useEffect, useState } from "react";
import { UnitIndicator } from "../components/UnitIndicator/UnitIndicator";
import { unitIndicatorPositions } from "./WorldMapData";
import { IMapProps, ITerritoryColourMap } from "../types";
import { MapRenderer } from "../components/MapRenderer/MapRenderer";
import { mapData } from "./WorldMapData";

export const WorldMap = (props: IMapProps) => {
  return (
    <MapRenderer
      showUnitIndicators={props.showUnitIndicators}
      mapData={mapData}
      selectionIds={props.selectionIds}
      unitIndicatorPositions={unitIndicatorPositions}
      playerData={props.playerData}
      handleOnClickTerritory={props.handleOnClickTerritory}
      handleMouseEnterTerritory={props.handleMouseEnterTerritory}
      handleMouseExitTerritory={props.handleMouseExitTerritory}
    />
  );
};
