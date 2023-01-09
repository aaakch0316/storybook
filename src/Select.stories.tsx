import { ComponentStory, ComponentMeta } from "@storybook/react";

import Select from "./Select";

export default {
  title: "Components/Select",
  Helpers: Select,
} as ComponentMeta<typeof Select>;

const Template: ComponentStory<typeof Select> = (args) => <Select {...args} />;

export const Base = Template.bind({});
Base.args = {
  bg: "orange",
  borderColor: "blue",
  color: "red",
  size: "md",
  placeholder: "Woohoo! A new background color!",
  children: (
    <>
      <option>test a</option>
      <option>test b</option>
      <option>test c</option>
    </>
  ),
};
