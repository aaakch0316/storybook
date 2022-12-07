/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'

interface TextareaProps {
  /**
   * Textarea placeholder
   */
  label: string;
}

const Textarea = ({
  label
}: TextareaProps) => {
  return (
    <textarea css={style} placeholder={label} />
  )
}

const style = css``;

export default Textarea;