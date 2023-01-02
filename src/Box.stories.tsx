import { ComponentStory, ComponentMeta } from '@storybook/react';

import Box from './Box';

export default {
  title: 'Helpers/Box',
  Helpers: Box,
} as ComponentMeta<typeof Box>;

const Template: ComponentStory<typeof Box> = (args) => < Box {...args}/>;

export const Base = Template.bind({});
Base.args = {
  label: 'This is Box',
  color: 'white',
  backgroundColor: 'red',
  width: '100%',
  maxWidth: '',
  minWidth: '',
  height: '',
  maxHeight: '',
  minHeight: '',
  borderWidth: '',
  borderRadius: '',
  overflow: 'visible',
  padding: '10px',
  paddingLeft: '',
  paddingRight: '',
  paddingTop: '',
  paddingBotton: '',
  margin: '',
  marginLeft: '',
  marginRight: '',
  marginTop: '',
  marginBotton: '',
  display: '',
  alignItems: '',
  alignContent: '',
  alignSelf: '',
  justifyContent: '',
  fontWeight: '',
  letterSpacing: '',
  fontSize: '',
  textTransform: 'none',
  lineHeight: 'normal'

}