import { ComponentStory, ComponentMeta } from "@storybook/react";

import Sample from "./Sample";

export default {
  title: "Sample/Init",
  component: Sample,
} as ComponentMeta<typeof Sample>;

const Template: ComponentStory<typeof Sample> = (args) => {
  return <Sample {...args}>hi</Sample>;
};

export const Base = Template.bind({});
Base.args = {
  test: "Init",
};
