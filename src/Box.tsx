/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'



interface BoxProps {
  /** Box font color */
  label: string;
  /** Box font color */
  color: string;
  /**Box backgroundColor*/
  backgroundColor: string;
  /** Box width */
  width: string;
  /** Box maxWidth */
  maxWidth: string;
  /** Box minWidth */
  minWidth: string;
  /** Box height */
  height: string;
  /** Box maxHeight */
  maxHeight: string;
  /** Box minHeight */
  minHeight: string;
  /** Box borderWidth */
  borderWidth: string;
  /** Box borderRadius */
  borderRadius: string;
  /** Box overflow */
  overflow: string;
  /** Box padding */
  padding: string;
  /** Box paddingLeft */
  paddingLeft: string;
  /** Box paddingRight */
  paddingRight: string;
  /** Box paddingTop */
  paddingTop: string;
  /** Box paddingBotton */
  paddingBotton: string;
  /** Box margin */
  margin: string;
  /** Box marginLeft */
  marginLeft: string;
  /** Box marginRight */
  marginRight: string;
  /** Box marginTop */
  marginTop: string;
  /** Box marginBotton */
  marginBotton: string;
  /** Box display */
  display: string;
  /** Box alignItems */
  alignItems: string;
  /** Box alignContent */
  alignContent: string;
  /** Box alignSelf */
  alignSelf: string;
  /** Box justifyContent */
  justifyContent: string;
  /** Box fontWeight */
  fontWeight: string;
  /** Box letterSpacing */
  letterSpacing: string;
  /** Box fontSize */
  fontSize: string;
  /** Box textTransform */
  textTransform: string;
  /** Box lineHeight */
  lineHeight: string;
}

const Box = (props: BoxProps) => {
  return (
    <div
      css={style(props)}
    >{props.label}</div>
  )
}

const style = ({
  backgroundColor= 'red',
  width= '100%',
  color= 'white',
  maxWidth='',
  minWidth='',
  height='',
  maxHeight='',
  minHeight='',
  borderWidth='',
  borderRadius='',
  overflow='',
  padding='',
  paddingLeft='',
  paddingRight='',
  paddingTop='',
  paddingBotton='',
  margin='',
  marginLeft='',
  marginRight='',
  marginTop='',
  marginBotton='',
  display='',
  alignItems='',
  alignContent='',
  alignSelf='',
  justifyContent='',
  fontWeight='',
  letterSpacing='',
  fontSize='',
  textTransform='',
  lineHeight='',
}: BoxProps) => {
  return (
    css`
      background-color: ${backgroundColor};
      width: ${width};
      width: ${width};
      width: ${width};
      color: ${color};
      max-width: ${maxWidth};
      min-width: ${minWidth};
      height: ${height};
      max-height: ${maxHeight};
      min-height: ${minHeight};
      border-width: ${borderWidth};
      border-radius: ${borderRadius};
      overflow: ${overflow};
      padding: ${padding};
      padding-left: ${paddingLeft};
      padding-right: ${paddingRight};
      padding-top: ${paddingTop};
      padding-botton: ${paddingBotton};
      margin: ${margin};
      margin-left: ${marginLeft};
      margin-right: ${marginRight};
      margin-top: ${marginTop};
      margin-botton: ${marginBotton};
      display: ${display};
      align-items: ${alignItems};
      align-content: ${alignContent};
      align-self: ${alignSelf};
      justify-content: ${justifyContent};
      font-weight: ${fontWeight};
      letter-spacing: ${letterSpacing};
      font-size: ${fontSize};
      text-transform: ${textTransform};
      line-height: ${lineHeight};
    `
  )
}

export default Box;