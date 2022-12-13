import { ComponentStory, ComponentMeta } from '@storybook/react';

import Checkbox from './Checkbox';

export default {
  /**
   * lksdjfelwjfwlefjweljfwefjwpoj
   */
  title: 'Components/Checkbox',
  component: Checkbox,
} as ComponentMeta<typeof Checkbox>;

const Template: ComponentStory<typeof Checkbox> = (args) => <Checkbox {...args} />;

export const Base = Template.bind({});
Base.args = {
  // label: 'Basic usag'
  label : 'checkbox',
  size : 'lg',
  color : 'blue2',
  isDisabled : false,
  defaultChecked : false,
  isInvalid : false
};

