import { ComponentStory, ComponentMeta } from "@storybook/react";

import Radio from "./Radio";

export default {
  title: "Components/Radio",
  component: Radio,
} as ComponentMeta<typeof Radio>;

const Template: ComponentStory<typeof Radio> = (args) => <Radio {...args} />;

export const Base = Template.bind({});
Base.args = {
  // label: 'Basic usag'
  // label: "Radio",
  size: "md",
  colorScheme: "red",
  fontColor: "black",
  isDisabled: false,
};

// defaultChecked;
// colorScheme;
// size;
// isDisabled
