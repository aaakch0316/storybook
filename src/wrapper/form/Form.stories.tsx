import { ComponentStory, ComponentMeta } from "@storybook/react";

import Form from "./Form";

export default {
  title: "Wrapper/SignIn",
  component: Form,
} as ComponentMeta<typeof Form>;

const Template: ComponentStory<typeof Form> = (args) => {
  return <Form {...args}>hi</Form>;
};

export const base = Template.bind({});
base.args = {
  test: "Init",
};
