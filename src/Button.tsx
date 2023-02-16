/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import { forwardRef, ReactNode } from 'react';
import { handlingButtonDetail } from './styles/components/button'
import { Colors } from './styles/components/commons/colors'

interface ButtonProps  {
  /**
   * Button contents
   */
  variant?: 'solid' | 'outline' | 'dropdown';
  /**
   * Button contents
   */
  label?: string;
  /**
   * Button contents
   */
  size?: "lg" | "md" | "sm" | "xs";
  /**
   * Button colors
   */
  color?: "blue2";
  /**
   * Button fontColor
   */
  fontSize?: string;
  children?: string;
  /**
   * Optional click handler
   */
  onClick?: () => void;
}

const Button = forwardRef<React.FunctionComponent<ButtonProps>, ButtonProps>((props, ref) => {
  let ButtonComponent = null

  switch (props.variant) {
    case 'solid':
      ButtonComponent = (
        <button 
          // ref={ref}
          onClick = {props.onClick}
          css={
            styleSolid(props)
          }
        >
          {props.children}
        </button>
      )
      break;
    case 'outline':
      ButtonComponent = (
        <button 
        onClick = {props.onClick}
        css={
          styleOutline(props)
        }
      >
        {props.children}
      </button>
      )
      break;
    case 'dropdown':
      ButtonComponent = (
        <button 
          {...props}
          onClick = {props.onClick}
          css={
            styleDropdown(props)
          }
        >
          {props.children}
          <div>&#8744;</div>
        </button>
      )
      break;
    default:
      break;
  }
  return (
    <div>
    {ButtonComponent}
    </div>
  )
})

const styleSolid = ({
  size = 'md',
  color = 'blue2'
}: ButtonProps) => {
  const height : string = handlingButtonDetail.height[size]
  const fontSise : string = handlingButtonDetail.fontSise[size]
  const background  = Colors[color]
  return (
    css`
      outline: none;
      border: none;
      box-sizing: border-box;
      height: ${height};
      background: ${background};
      font-size: ${fontSise};
      padding: 0.5rem 1rem;
      color: white;
      border-radius: 0.25rem;
      line-height: 1;
      font-weight: 600;
      &:focus {
        box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.2);
      }
      &:hover {
        background: ${Colors['blue1']};
        transition-duration: 0.2s;
      }
      &:active {
        background: ${Colors['blue1']};
      }
    `
)};

const styleOutline = ({
  size = 'md',
  color = 'blue2'
}: ButtonProps) => {
  const height : string = handlingButtonDetail.height[size]
  const fontSise : string = handlingButtonDetail.fontSise[size]
  const background  = Colors[color]
  return (
    css`
    border: 1px solid ${background};
    box-sizing: border-box;
    height: ${height};
    background: white;
    font-size: ${fontSise};
    padding: 0.5rem 1rem;
    color: ${background};
    border-radius: 0.25rem;
    line-height: 1;
    font-weight: 600;
    &:focus {
      box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.2);
    }
    &:hover {
      background: ${Colors['blue7']};
      transition-duration: 0.2s;
    }
    &:active {
      background: ${Colors['blue6']};
    }
    `
  )
}

const styleDropdown = ({}) => {
  return (
    css`
      position: relative;
      background: white;
      color: #8b95a1;
      border: 1px solid #d1d6db;
      width: 350px;
      display: flex;
      justify-content: space-between;
      padding: 10px;
      margin: 10px;
  
      border-radius: 0.25rem;
      font-weight: 400;
      text-align: left;
      white-space: nowrap;
      font-size: 0.85rem;
      cursor: pointer;
  
      :hover {
        border-color: #0069d9;
      }
    `
  )
}

export default Button;
