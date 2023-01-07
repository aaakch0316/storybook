import { ComponentStory, ComponentMeta } from '@storybook/react';

import Flex from './Flex';

export default {
  title: 'Helpers/Flex',
  Helpers: Flex,
} as ComponentMeta<typeof Flex>;

const Template: ComponentStory<typeof Flex> = (args) => <Flex {...args} />;

export const Base = Template.bind({});
Base.args = {
  display: 'flex',
  flexDrection: 'row',
  justifyContent : 'flex-start',
  alignItems : 'stretch',
  alignContent : 'stretch'
};

