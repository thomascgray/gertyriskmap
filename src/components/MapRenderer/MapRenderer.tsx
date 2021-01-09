import React from "react";

export interface IMapRendererProps {
  showUnitIndicators: boolean;
  mapData: any;
}

export const MapRenderer = (props: IMapRendererProps) => {
  const TerritoryMarkup = Object.keys(props.mapData.territories).map();

  return (
    <div className="world-map">
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
      </svg>
    </div>
  );
};
