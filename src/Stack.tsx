/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'

interface StackProps {
  /** Stack direction */
  direction: "row" | "column" ;
  /** Stack spacing */
  spacing: string;
}

const Stack = (props: StackProps) => {
  return (
    <div
      css={
        style(props)
      }
    >
    </div>
  )
}


const style = ({
  direction='row',
  spacing='24px'
}: StackProps) => {
  return (
    css`
      display: flex;
      direction: ${direction};
      & * {
        flex: 1 1 0;
        margin: ${spacing}
      }
    `
  )
}


export default Stack;
