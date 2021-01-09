import React from "react";
import "./UnitIndicator.css";
import { EPlayerColour } from "../../types";
export interface IUnitIndicatorProps {
  count: number;
  territory: string;
  colour: string;
  top?: string;
  left?: string;
}

const MIN_FONT_SIZE = 12;
const MAX_FONT_SIZE = 22;

export const UnitIndicator = (props: IUnitIndicatorProps) => {
  const { top = "", left = "" } = props;
  let fontSize = props.count / 2 + 13;

  if (fontSize < MIN_FONT_SIZE) {
    fontSize = MIN_FONT_SIZE;
  } else if (fontSize > MAX_FONT_SIZE) {
    fontSize = MAX_FONT_SIZE;
  }

  return (
    <div
      style={{
        top,
        left,
        fontSize: `${fontSize}px`,
      }}
      id={`${props.territory}-unit-indicator`}
      className={`unit-indicator ${props.colour}`}
    >
      {props.count}
    </div>
  );
};
