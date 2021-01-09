import React from "react";
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from "@storybook/react/types-6-0";

import { UnitIndicator, IUnitIndicatorProps } from "./UnitIndicator";
import { EPlayerColour } from "../../types";

export default {
  title: "Components/Unit Indicator",
  component: UnitIndicator,
} as Meta;

const Template: Story<IUnitIndicatorProps> = (args) => (
  <UnitIndicator {...args} />
);

export const SingleDigit = Template.bind({});
SingleDigit.args = {
  count: 1,
  territory: "Brazil",
  colour: EPlayerColour.BLUE,
};

export const DoubleDigit = Template.bind({});
DoubleDigit.args = {
  count: 12,
  territory: "Brazil",
  colour: EPlayerColour.BLUE,
};

export const TripleDigit = Template.bind({});
TripleDigit.args = {
  count: 123,
  territory: "Brazil",
  colour: EPlayerColour.BLUE,
};
