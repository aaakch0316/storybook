import { ComponentStory, ComponentMeta } from '@storybook/react';

import Button from './Button';

export default {
  title: 'Components/Button',
  component: Button,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => {
  return(
    <Button {...args}>click here</Button>
  )
};
// variant='outline'
// variant='ghost'

export const Solid = Template.bind({});
export const Outline = Template.bind({});
export const Dropdown = Template.bind({});
Solid.args = {
  variant:'solid',
  label: 'button',
  size: 'sm',
  color: 'blue2'
};
Outline.args = {
  variant:'outline',
  label: 'button',
  size: 'sm',
  color: 'blue2'
};
Dropdown.args = {
  variant:'dropdown',
  label: 'button',
  size: 'sm',
  onClick: function() {alert('action!')}
}