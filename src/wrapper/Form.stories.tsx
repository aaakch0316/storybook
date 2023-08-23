import { ComponentStory, ComponentMeta } from "@storybook/react";

import Form from "./Form";

export default {
  title: "Wrapper/Form",
  component: Form,
} as ComponentMeta<typeof Form>;

const Template: ComponentStory<typeof Form> = (args) => {
  return <Form {...args}>hi</Form>;
};

export const Login = Template.bind({});
Login.args = {
  test: "Init",
};
