/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'

interface StackProps {
  /** Stack direction */
  direction: "column" | "column-reverse" | "row" | "row-reverse";
  /** Stack spacing */
  spacing: string;
  /** Stack spacing */
  flexWrap: "nowrap" | "wrap" | "wrap-reverse" ;
  /** Flex justifyContent */
  justifyContent: "flex-start" | "space-between" | "space-around" | "center";
  /** Flex alignItems */
  alignItems: "stretch" | "center" ;
}

const Stack = (props: StackProps) => {
  return (
    <div
      css={
        style(props)
      }
    >
      <div style={{width: '100px', height: '100px',border: '1px solid red'}}></div>
      <div style={{width: '100px', height: '100px',border: '1px solid black'}}></div>
      <div style={{width: '100px', height: '100px',border: '1px solid blue'}}></div>

    </div>
  )
}


const style = ({
  direction='row',
  spacing='24px',
  flexWrap='nowrap',
  justifyContent='flex-start',
  alignItems='stretch',
}: StackProps) => {
  return (
    css`
      display: flex;
      flex-direction: ${direction};
      justify-content : ${justifyContent};
      align-items : ${alignItems};
      flex-wrap: ${flexWrap}
      & * {
        /* flex: 1 1 0; */
        margin: ${spacing}
      }
    `
  )
}


export default Stack;
