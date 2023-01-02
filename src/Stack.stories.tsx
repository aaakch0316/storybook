import { ComponentStory, ComponentMeta } from '@storybook/react';

import Stack from './Stack';

export default {
  title: 'Helpers/Stack',
  Helpers: Stack,
} as ComponentMeta<typeof Stack>;

const Template: ComponentStory<typeof Stack> = (args) => <Stack {...args} />;

export const Base = Template.bind({});
Base.args = {
  direction: 'row',
  spacing: '24px'
};

