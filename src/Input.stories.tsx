import { ComponentStory, ComponentMeta } from "@storybook/react";

import Input from "./Input";

/**
 * 인풋에 버튼을 추가시킬 예정
 * - variant는 outline으로 제작
 * - InputRightElement 로 오른쪽에 button 추가 할 수 있도록
 */
export default {
  title: "Components/Input",
  component: Input,
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = (args) => <Input {...args} />;

export const Base = Template.bind({});
Base.args = {
  label: "Basic usag",
  size: "md",
  variant: "outline",
};
